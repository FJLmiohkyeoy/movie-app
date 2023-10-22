import React, { useEffect, useState } from "react";
import styled from "styled-components";
import searchMovies from "../query/search";
import Movie from "../components/Movie";
import SearchedMovies from "../components/search/SearchedMovies";
import { BASE_IMAGE_URL } from "../const";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SearchBox = styled.input`
  width: 50rem;
  height: 2rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  font-family: fantasy;
  border: 3px solid black;
  border-radius: 3px;
  &:focus {
    outline: none;
  }
`;

const MoviesContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fill, minmax(12rem, 1fr));
    gap:1rem;
    min-width: 50rem;
    max-width: 100% 
`;
const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState([]);

  const handleChange = ({ target }) => {
    setKeyword(target.value);
  };

  useEffect(() => {
    if (keyword === "") {
      setMovies([]);
      return;
    }
    const fetchMovies = async () => {
      const searchedMovies = await searchMovies(keyword);
      setMovies(searchedMovies);
    };

    fetchMovies();
  }, [keyword]);

  return (
    <Container>
      <SearchBox
        type="text"
        value={keyword}
        onChange={handleChange}
        placeholder="Search.../"
      />
      <MoviesContainer>
        <SearchedMovies movies={movies} />
      </MoviesContainer>
    </Container>
  );
};

export default Search;
