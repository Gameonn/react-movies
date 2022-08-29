import React, { useState, useContext, useCallback } from "react";
import _debounce from "lodash/debounce";
import { Link } from "react-router-dom";

import Input from "../components/Input";
import { MovieContext } from "../context/MovieContext";
import Card from "../components/Card";
import classes from "../styles/Home.module.css";

const Home = () => {
  const [value, setValue] = useState("");
  const { setSearch, movies, nominationHandler, nominationAlert } = useContext(
    MovieContext
  );

  const debounceSearchHandler = input => {
    setSearch(input);
  };
  const debounceFn = useCallback(_debounce(debounceSearchHandler, 500), []);

  const searchHandler = e => {
    setValue(e.target.value);
    debounceFn(e.target.value);
  };

  return (
    <div className={classes["home-container"]}>
      {nominationAlert && <h4 className={classes.alert}>{nominationAlert}</h4>}

      {!value && (
        <h4 className={classes["search-empty"]}>
          Search for your favorite movies
        </h4>
      )}
      <Input handleSearch={searchHandler} value={value} />

      {value && !movies && (
        <h4 className={classes["search-warning"]}>
          No results were found based on your search. Please try again
        </h4>
      )}

      {movies?.length > 0 && (
        <div className={classes["movies"]}>
          {movies?.map(movie => {
            return (
              <Link
                to={`movies/${movie.imdbID}`}
                className={classes["text-link"]}
                key={movie.imdbID}
              >
                <Card
                  key={movie.imdbID}
                  image={movie.Poster}
                  title={movie.Title}
                  year={movie.Year}
                  addNomination={e => nominationHandler(movie, e)}
                  isNominated={movie.isNominated}
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
