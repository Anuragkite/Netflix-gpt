import React from "react";
import { useSelector } from "react-redux"; 
import useTrailerVideo from "../Hooks/useTrailerVideo";

const VideoBg = ({ movieId }) => {
  // 1. Fetch Data: Call the custom hook with the movieId
  // This runs the API call and updates the Redux store
  useTrailerVideo(movieId);

  // 2. Read Data: Subscribe to the store
  const trailerVideoKey = useSelector((store) => store.movie?.trailerVideo?.key);

  // 3. Early Return: If Redux doesn't have the key yet, render nothing
  if (!trailerVideoKey) return null;

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideoKey +
          "?si=GtM5djOQHCXqQwu2&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       
      ></iframe>
    </div>
  );
};

export default VideoBg;