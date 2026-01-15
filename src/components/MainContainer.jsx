import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  // console.log("mainContainer ");

  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  // console.log(movies);

  if (!movies) return;

  const mainMovies = movies[0];

  const { original_title, overview, id } = mainMovies;
  // console.log(id)
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
