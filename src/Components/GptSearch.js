import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../Utils/Constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_URL} alt="BG URL"></img>
      </div>
      <GptSearchBar /> 
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
