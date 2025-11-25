import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidData } from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef();
  const password = useRef();
  const name = useRef();

  const ToggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {


    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    let  nameValue = null ;

    if(!isSignInForm){
      nameValue = name.current.value;
    }


   
    // validate
    const message = CheckValidData(emailValue, passwordValue,nameValue);
    setErrorMessage(message);

    if (!message) {
      console.log("Form submitted successfully!");
    }
  };

  return (
    <div>
      <Header />

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg"
          className="w-full h-full object-cover"
          alt="bg"
        />
      </div>

      {/* Login Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black/70 w-1/4 p-10 top-1/4 left-1/2 -translate-x-1/2 flex flex-col rounded-2xl text-white"
      >
        <h1 className="font-bold text-4xl mb-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="my-3 p-4 rounded-xl bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="my-3 p-4 rounded-xl bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-3 p-4 rounded-xl bg-gray-700"
        />

        {/* Validation Error */}
        {errorMessage && (
          <p className="text-red-500 font-semibold">{errorMessage}</p>
        )}

        <button
          onClick={handleButtonClick}
          className="my-4 p-4 bg-red-700 rounded-xl"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p onClick={ToggleSignInForm} className="cursor-pointer">
          {isSignInForm ? "Not Registered? Sign Up" : "Already a user? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
