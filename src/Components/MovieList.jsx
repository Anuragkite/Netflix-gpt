import React from "react";
import MovieCart from "./MovieCart";

const MovieList = ({ title, movie }) => {
  if (!movie) return null;

  return (
    <div className="-mt-40 relative  p-2">
      <h1 className="text-lg md:text-3xl py-4 text-white font-bold">{title}</h1>

      <div
        className="flex overflow-x-scroll overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden space-x-4"
        onWheel={(e) => {
          e.preventDefault();
          e.currentTarget.scrollLeft += e.deltaY;
        }}
      >
        {movie.map((item) => (
          <MovieCart
            key={item.id}
            movieTitle={item.title}
            posterPath={item.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

