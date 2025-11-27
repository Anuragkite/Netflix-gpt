import React, { useEffect } from "react";
import Login from "./Login";
import Header from "./Header";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUsers, removeUsers } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName } = user;

        dispatch(
          addUsers({ email: email, uid: uid, displayName: displayName })
        );
        
      } else {
        // User is signed out
        dispatch(removeUsers());
      }
    });
  }, []);

  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
