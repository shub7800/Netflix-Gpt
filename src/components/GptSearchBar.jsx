import React from "react";
import lang from "../utils/languageConstans";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const langKey = useSelector((store)=>store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12 gap-4" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="p-4 col-span-9 bg-black bg-opacity-80 text-white border border-gray-400 rounded-md placeholder-gray-400"
          placeholder= {lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;