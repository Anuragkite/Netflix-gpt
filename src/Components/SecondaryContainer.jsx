import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const data = useSelector((store) => store.movie);
  
  // Safety check: Don't render until data is available
  if (!data || !data.nowPlayingMovies) return null;
  if (!data || !data.popularMovies) return null;
  if (!data || !data.topRatedMovies) return null;

  return (
    // bg-black ensures the background behind the posters is dark
    <div className="bg-black">
     
      <div className="mt-[27vh] pl-4 md:pl-12 relative z-20 pb-10">
        <MovieList title={"Now Playing"} movie={data.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movie={data.popularMovies} />
        <MovieList title={"Top-Rated Movies"} movie={data.topRatedMovies} />
        </div>
    </div>
  );
};

export default SecondaryContainer;
