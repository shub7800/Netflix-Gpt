import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center px-12 md:px-20 bg-gradient-to-r from-black via-black/60 to-transparent">
      <div className="max-w-2xl -mt-32">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
        <p className="text-sm md:text-lg text-gray-100 mb-6 line-clamp-3">{overview}</p>
        <div className="flex gap-3">
          <button className="bg-white text-black font-bold py-2 md:py-3 px-6 md:px-8 rounded hover:bg-opacity-80 transition-all flex items-center gap-2">
            <span className="text-xl">▶</span>
            <span>Play</span>
          </button>
          <button className="bg-gray-500 bg-opacity-50 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded hover:bg-opacity-70 transition-all backdrop-blur-sm flex items-center gap-2">
            <span className="text-xl">ℹ️</span>
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;