import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
//   console.log(movies);

  if (!movies || movies.length === 0) return null;
  return (
    <div className="px-4 md:px-12">
      <h2 className="text-lg md:text-xl lg:text-2xl text-white font-semibold mb-3 md:mb-4">
        {title}
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex overflow-x-scroll gap-2 pb-4 -mb-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;