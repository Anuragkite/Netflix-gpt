import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, removeUsers } from "../utils/userSlice";
import { ProfilePictures, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const profileUrl = useSelector((reduxStore) => reduxStore?.user?.photoURL);
  const GptSearchPage = useSelector(store =>store.gpt.showGptSearch  )
  const dispatch = useDispatch();

  const handleGptSearchBtn = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUsers({
            email: email,
            uid: uid,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        if (location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        // User is signed out
        dispatch(removeUsers());
        navigate("/");
      }
    });
    // unsubscribing  when component is unmountes
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("sign Out successfully !");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("Error in Sign-Out , here is Error :", error);
      });
  };

  const HandleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full h-24 bg-gradient-to-b from-black to-transparent z-50 flex  justify-between">
      {/* <img
        id="app Logo"
        src={app_LOGO}
        alt="app-logo"
        className="w-42 p-2 border border-black "
      ></img> */}
      <h1 className="w-44 px-4 py-2 text-4xl md:text-5xl font-bold text-red-600 tracking-tighter cursor-pointer shadow-black drop-shadow-lg">
        MovieGPT
      </h1>
      {location.pathname === "/browse" ? (
        <div className="p-3 w-70 h-20 m-3 flex     ">
          <div className="text-white mr-5 mt-4 ">
            { GptSearchPage &&  <select className="bg-gray-800" onChange={HandleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {" "}
                  {lang.name}{" "}
                </option>
              ))}
            </select>}
          </div>
          <div className="flex justify-evenly">
            <button
              className="bg-purple-600 w-45 mr-4 rounded-lg text-white font-bold p-3"
              onClick={handleGptSearchBtn}
            >
              GPT Search
            </button>

            <img
              className="w-12 h-12"
              src={profileUrl ? profileUrl : ProfilePictures}
            />
            <button onClick={handleSignOut} className="font-bold text-white ">
              (Sign Out)
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
