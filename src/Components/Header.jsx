import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router-dom";
const Header = () => {
  const Auth = auth;
  const navigate = useNavigate();
 const location = useLocation();

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

  return (
    <div className="absolute w-full h-24 bg-gradient-to-b from-black to-transparent z-10 flex  justify-between">
      <img
        id="NetFlix Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix-logo"
        className="w-30 p-2 border border-black "
      ></img>
     {location.pathname ==="/browse" ? <div className="p-3 w-45 h-20 m-3 flex justify-evenly ">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" />
        <button onClick={handleSignOut} className="font-bold text-white ">
          (Sign Out)
        </button>
      </div>:<></>}
    </div>
  );
};

export default Header;
