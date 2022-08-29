import React, { createContext, useState, useEffect } from "react";
import axios from "../axios";
export const MovieContext = createContext();

const MovieApp = ({ children }) => {
  const [nominations, setNominations] = useState([]);
  const [nominationAlert, setNominationAlert] = useState("");
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState("2022");
  const [selectedMovie, setSelectedMovie] = useState("");

  const fetchMovies = async searchValue => {
    const response = await axios.get("/", {
      params: { s: searchValue, type: "movie" }
    });
    const data = response.data;
    setMovies(data.Search);
  };

  const removeNominatedMovie = movie => {
    movie.isNominated = false;
    const newNominationList = nominations.filter(
      n => n.imdbID !== movie.imdbID
    );
    setNominations(newNominationList);
  };

  const addNominatedMovie = movie => {
    movie.isNominated = true;
    const newNominationList = [...nominations, movie];
    setNominations(newNominationList);
  };

  const nominationHandler = (movie, e) => {
    e.preventDefault();
    setNominationAlert("");
    if (nominations.includes(movie)) {
      removeNominatedMovie(movie);
    } else {
      if (nominations.length < 5) {
        addNominatedMovie(movie);
      } else {
        setNominationAlert("Nomination Limit Reached");
        window.scrollTo(0, 0);
      }
    }
  };

  const showDetail = async id => {
    const response = await axios.get("/", { params: { i: id, type: "movie" } });
    const data = response.data;
    setSelectedMovie(data);
  };

  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  return (
    <MovieContext.Provider
      value={{
        setSearch,
        movies,
        nominations,
        nominationHandler,
        showDetail,
        selectedMovie,
        nominationAlert
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieApp;
