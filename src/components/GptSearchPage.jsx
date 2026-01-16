import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import bgimg from "../assets/bg.jpg";

const GptSearchPage = () => {
  return (
    <div className="min-h-screen relative">
      <img 
        className="fixed top-0 left-0 w-full h-full object-cover -z-10" 
        src={bgimg} 
        alt="" 
      />
      <div className="absolute inset-0 bg-black opacity-30 -z-10"></div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
}; 

export default GptSearchPage;