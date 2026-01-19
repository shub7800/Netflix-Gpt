import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-r from-black via-black/70 to-transparent pointer-events-none">
      <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mt-20 sm:mt-0 sm:-mt-16 pointer-events-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 drop-shadow-2xl leading-tight">
          {title}
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-100 mb-4 sm:mb-5 md:mb-6 line-clamp-2 sm:line-clamp-3 drop-shadow-lg leading-relaxed">
          {overview}
        </p>
        <div className="flex gap-2 sm:gap-3">
          <button className="bg-white text-black font-bold py-1.5 px-4 sm:py-2 sm:px-6 md:py-2.5 md:px-8 lg:py-3 lg:px-10 rounded-md hover:bg-opacity-80 transition-all flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base lg:text-lg shadow-xl">
            <span className="text-sm sm:text-base md:text-lg">▶</span>
            <span>Play</span>
          </button>
          <button className="bg-gray-500 bg-opacity-60 text-white font-bold py-1.5 px-4 sm:py-2 sm:px-6 md:py-2.5 md:px-8 lg:py-3 lg:px-10 rounded-md hover:bg-opacity-40 transition-all flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base lg:text-lg shadow-xl backdrop-blur-sm">
            <span className="text-sm sm:text-base md:text-lg">ℹ</span>
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;