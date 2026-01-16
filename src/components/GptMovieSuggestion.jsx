import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { moviesNames, movieResults } = useSelector((store) => store.gpt);

  if (!moviesNames || !movieResults) return null;

  return (
    <div className="bg-transparent mt-8 md:mt-12 px-4 md:px-8">
      <div className="relative z-20 space-y-8 md:space-y-12 pb-20">
        <div className="text-center pt-4 md:pt-6">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            AI Recommendations
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Curated just for you
          </p>
        </div>
        {moviesNames.map((movieName, index) => (
          <div key={movieName} className=" bg-opacity-70 rounded-xl p-4 md:p-6 backdrop-blur-md border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <MovieList
              title={movieName}
              movies={movieResults[index]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;