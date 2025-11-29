import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="pt-120 px-10">
      <h1 className="text-4xl font-bold ">{title}</h1>
      <p className=" my-2 text-xl">{overview}</p>
      <div className="flex flex-row  my-5">
        <button className="bg-gray-500 text-black my-2 w-34 p-2 text-2xl border font-bold opacity-80 rounded-lg "> ▶️Play</button>
        <button className="bg-gray-500 text-black ml-5 my-2 p-2 w-34 text-2xl font-bold opacity-80 rounded-lg     " >More Info.</button>
      </div>
    </div>
  );
};

export default VideoTitle;
