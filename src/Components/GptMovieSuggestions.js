import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!(movieNames || movieResults)) return null;
  return (
    <div className="p-4 m-4 text-white bg-black opacity-80">
      <div>
        {movieNames?.map((movie, index) => (
          <MovieList
            key={movie}
            title={movie}
            movies={movieResults[index]?.results}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
