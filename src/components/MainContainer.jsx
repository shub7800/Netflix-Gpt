import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies) return;

  const mainMovies = movies[0];

  const { original_title, overview, id } = mainMovies;
  
  return (
    <div className="relative w-screen">
      <div className="h-screen relative">
        <VideoBackground movieId={id} />
        <VideoTitle title={original_title} overview={overview} />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default MainContainer;