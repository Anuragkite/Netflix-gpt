import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const ToggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg "></img>
      </div>
      <form className="absolute bg-black opacity-80 h-8/12 w-3/12 p-10 right-3/8 top-2/12   flex flex-col  rounded-4xl">
        <h1 className="font-bold text-4xl font-sans  text-white mx-3 my-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
       {!isSignInForm && (<input
          type="text"
          placeholder="Full Name  "
          className="  opacity-100  text-white my-3 p-6 rounded-2xl bg-gray-700"
        />)}
        <input
          type="text"
          placeholder="Email Address  "
          className="  opacity-100  text-white my-3 p-6 rounded-2xl bg-gray-700"
        />
        <input
          type="password"
          placeholder=" Password "
          className=" opacity-100  text-white my-3 p-6 rounded-2xl  bg-gray-700 "
        ></input>
        <button className="my-3 p-4 bg-red-700 opacity-100  cursor-pointer rounded text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 text-white opacity-100 cursor-pointer" onClick={ToggleSignInForm}>
          {" "}
          {isSignInForm
            ? "Not Registered ? Sign up.."
            : "Already a User ? Sign In.." }
        </p>
      </form>
    </div>
  );
};

export default Login;
