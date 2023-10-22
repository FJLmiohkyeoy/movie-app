import React, { useEffect, useState } from "react";
import Movie from "../Movie";
import { BASE_IMAGE_URL } from "../../const";

const SearchedMovies = ({ movies }) => {
  const [imagePaths, setImagePaths] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(true);
  useEffect(() => {
    setImagePaths(movies.map((movie) => movie.poster_path));
  }, [movies]);

  useEffect(() => {
    if (imagePaths.length === 0) {
      setImagesLoaded(true);
      return;
    } else if (imagePaths.length > 0) {
      setImagesLoaded(false);
    }

    const promiseImages = imagePaths.map(
      (imagePath) =>
        new Promise((resolve, reject) => {
          const image = new Image();
          image.onload = resolve;
          image.onerror = reject;
          image.src = `${BASE_IMAGE_URL}${imagePath}`;
        })
    );

    Promise.all(promiseImages)
      .then(() => {
        setTimeout(() => {
          setImagesLoaded(true);
        }, 1000);
      })
      .catch((error) => {
        console.log("image loading fail:", error);
      });
  }, [imagePaths]);

  return (
    <>{imagesLoaded ?(<>
      {movies.map((movie) => (
        <Movie
          id={movie.id}
          width="8rem"
          height="15rem"
          title={movie.title}
          poster={movie.poster_path}
          rating={movie.vote_average}
        />
      ))}
    </>):(
        <h1>Loading...</h1>
    )}
    </>
  );
};

export default SearchedMovies;
