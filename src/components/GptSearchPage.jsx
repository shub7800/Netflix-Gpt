import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import bgimg from "../assets/bg.jpg";


const GptSearchPage = () => {
  
  return (
    <div>
      <img className="absolute -z-10" src={bgimg} alt="" />

      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
}; 

export default GptSearchPage;
