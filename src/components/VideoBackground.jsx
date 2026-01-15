import React from "react";
import { useSelector } from "react-redux";
import useMovieVideos from "../hooks/useMovieVideos";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  useMovieVideos(movieId);
  
  return (
    <div className="w-screen h-screen fixed top-0 left-0 -z-10">
      <iframe
        className="w-full h-full scale-150"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;