import React, { useRef, useState } from "react";
import lang from "../utils/languageConstans";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/GptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const searchTmdb = async (movies) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movies +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    if (loading) return;

    try {
      setLoading(true);

      const query =
        "Act as a movie recommendation system and suggest 5 movies for " +
        searchText.current.value +
        ". Return only comma separated names.";

      const gptResult = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: query }],
      });

      console.log(gptResult.choices[0].message.content);
      const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");

      const promiseArray = gptMovies.map((movies) => searchTmdb(movies));

      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(addGptMovieResult({ moviesNames: gptMovies, movieResults: tmdbResults }));

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center px-4">
      <div className="w-full md:w-1/2 rounded-2xl shadow-2xl p-6 md:p-8 bg-black bg-opacity-80 backdrop-blur-md border border-gray-800">
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            Discover Your Next Favorite Movie
          </h2>
          <p className="text-gray-400 text-center text-sm md:text-base">
            Powered by AI recommendations
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            ref={searchText}
            type="text"
            className="flex-1 p-4 text-base md:text-lg rounded-lg border-2 border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 shadow-inner hover:border-gray-600"
            placeholder={
              lang[langKey]?.gptSearchPlaceholder ||
              "What would you like to watch?"
            }
          />
          <button
            onClick={handleGptSearchClick}
            disabled={loading}
            className="px-6 sm:px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-base md:text-lg rounded-lg hover:from-red-700 hover:to-red-800 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-red-600/50 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:from-red-600 disabled:hover:to-red-700 disabled:scale-100"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Searching...
              </span>
            ) : (
              lang[langKey]?.search || "Search"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GptSearchBar;