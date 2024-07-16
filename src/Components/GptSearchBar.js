import React, { useRef, useState } from "react";
import { API_OPTIONS, BG_URL } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import lang from "../Utils/languageConstants";
import getGptResults from "../Utils/getGptResults";
import { addGptMovieResult } from "../Utils/gptSlice";

const GptSearchBar = () => {
  const language = useSelector((store) => store?.config?.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTmdb = async (movie) => {
    const result = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie + "&page=1",
      API_OPTIONS
    );
    const json = await result.json();
    return json;
  };

  const handleGptSearchClick = async () => {
    const result = await getGptResults(searchText.current.value);
    const gptMovies = result?.choices?.[0]?.message?.content?.split(",");
    const tmdbResultsPromiseArray = gptMovies.map((movie) =>
      searchMovieTmdb(movie)
    );
    const tmdbResults = await Promise.all(tmdbResultsPromiseArray);
    dispatch(addGptMovieResult({movieNames: gptMovies , movieResults: tmdbResults}));
  };

  return (
    <div className="flex justify-center ">
      <form
        className="bg-black w-1/2 grid grid-cols-12 mt-[8%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
          className="p-4 m-4 col-span-10"
          ref={searchText}
        ></input>
        <button
          className=" m-4 bg-red-700 text-white rounded-lg col-span-2"
          onClick={handleGptSearchClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
