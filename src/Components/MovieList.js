import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("Movies", movies?.[0]);

  return (
    <div className="">
      <div className="p-6 text-white">
        <h1 className="font-bold text-2xl">{title}</h1>
        <div className="flex overflow-x-scroll m-2">
          <div className="flex">
            {movies?.map((movie) => (
              <MovieCard posterPath={movie?.poster_path} key={movie?.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
