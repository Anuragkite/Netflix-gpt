import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../Hooks/useTrailerVideo";

const VideoBg = ({ movieId }) => {
  // Fetch the trailer into the store
  useTrailerVideo(movieId);

  // Read the key from redux
  const trailerVideoKey = useSelector((store) => store.movie?.trailerVideo?.key);

  // If no trailer yet, render nothing
  if (!trailerVideoKey) return null;

  // Place the video as a fixed, full-viewport background behind other UI
  return (
    <div className="fixed inset-0 -z-10">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailerVideoKey}?mute=1&autoplay=1&loop=1&playlist=${trailerVideoKey}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default VideoBg;