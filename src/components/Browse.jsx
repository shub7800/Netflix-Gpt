import React from "react";
import Header from "./Header"; 
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  // console.log("hello");
  

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
        MainContainer
          - videobg 
          - video title
          - video description
        Secondary container 
          - movielist *n
            - cards*n
      */}
    </div>
  );
};

export default Browse;
