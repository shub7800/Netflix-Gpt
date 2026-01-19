import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieVideos = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movie.trailerVideo);

  //fetching trailer video and updating the store with trailer video
  const getMovieVideo = async () => {
    // console.log(movieId)
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideo();
  }, []);
};

export default useMovieVideos;
