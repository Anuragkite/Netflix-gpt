import React from "react";
import { BackGroundImageURL } from "../utils/constants";

const GptSearchBar = () => {
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
          placeholder="On Which Adventure You Wanna Go Today ! "
        ></input>
        <button
          className=" col-span-3 bg-red-600 text-white rounded-lg my-4 py-4 mx-4 font-semibold text-2xl 
         "
        >
          {" "}
          Search{" "}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
