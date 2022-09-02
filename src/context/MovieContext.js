import React, { createContext, useState } from "react";
export const MovieContext = createContext();

const MovieApp = ({ children }) => {
  const [nominations, setNominations] = useState([]);
  const [nominationAlert, setNominationAlert] = useState("");

  const removeNominatedMovie = (movie) => {
    movie.isNominated = false;
    const newNominationList = nominations.filter(
      (n) => n.imdbID !== movie.imdbID
    );
    setNominations(newNominationList);
  };

  const addNominatedMovie = (movie) => {
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
        setNominationAlert(
          "You have reached the nomination limit! Please unselect and select other movies."
        );
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <MovieContext.Provider
      value={{
        nominations,
        nominationHandler,
        nominationAlert,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieApp;
