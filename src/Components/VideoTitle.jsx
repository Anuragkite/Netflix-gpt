import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="w-full aspect-video absolute pt-[20%] px-12 ">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className=" my-2  text-white w-[50%]">{overview}</p>
      <div className="flex flex-row  my-5">
        <button className="bg-white text-black my-2 w-28 p-2 text-2xl border font-bold  rounded-lg hover:opacity-60 "> Play</button>
        <button className="bg-white text-black ml-5 my-2 p-2 w-34 text-2xl font-bold  rounded-lg  hover:opacity-60   " >More Info.</button>
      </div>
    </div>
  );
};

export default VideoTitle;
