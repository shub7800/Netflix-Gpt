import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  
  return (
    <div className="w-36 md:w-44 lg:w-52 flex-shrink-0 transform transition-transform duration-300 ease-out hover:scale-105 cursor-pointer">
      <img 
        className="w-full rounded-md shadow-lg" 
        src={IMAGE_CDN_URL + posterPath} 
        alt="Movie Card" 
      />
    </div>
  );
};

export default MovieCard;