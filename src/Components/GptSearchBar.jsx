import React from "react";
import { BackGroundImageURL } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

const currentLanguage = useSelector((store)=> store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <div className="absolute inset-0 -z-10">
        <img
          src={BackGroundImageURL}
          className="w-full h-full object-cover"
          alt="bg"
        />
      </div>

      <form className=" w-1/2  bg-black grid grid-cols-12 ">
        <input
          type="text"
          className="col-span-9 rounded-lg px-3 my-4 border black  bg-white fl"
          placeholder={lang[currentLanguage].gptSearchPlaceholder}
        ></input>
        <button
          className=" col-span-3 bg-red-600 text-white rounded-lg my-4 py-4 mx-4 font-semibold text-2xl 
         "
        >
          {" "}
         {lang[currentLanguage].search }{" "}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
