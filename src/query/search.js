const serchMovies = async (keyword) => {

const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&primary_release_year=2023&page=1`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjdjN2FhNzA5ODE0NzUwODg3MDE0NzgwMzRhMTAyZCIsInN1YiI6IjY0YzViOTc1Y2FkYjZiMDBhYzY1YjlkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SvhPUDulBqgOs6XrS2QI6rburUWDa9xbLucjilvLLd4'
  }
};

const {results:movies} = await(await fetch(url, options)).json();
  return movies;
};

export default serchMovies;