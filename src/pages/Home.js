import React, { useState, useContext, useCallback, useEffect } from "react";
import _debounce from "lodash/debounce";
import { Link } from "react-router-dom";

import { searchMovies } from "../api";
import { MovieContext } from "../context/MovieContext";
import Alertbox from "../components/Alertbox";
import Spinner from "../components/Spinner";
import Input from "../components/Input";
import Card from "../components/Card";
import classes from "../styles/Home.module.css";

const Home = () => {
  const [search, setSearch] = useState("2022");
  const [error, setError] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const [movies, setMovies] = useState();
  const { nominationHandler, nominationAlert } = useContext(MovieContext);

  const debounceSearch = (input) => {
    if (input) fetchMovies(input);
  };
  const debounceFn = useCallback(_debounce(debounceSearch, 500), []);

  const searchHandler = (e) => {
    setSearch(e.target.value);
    debounceFn(e.target.value);
  };

  const fetchMovies = async (value) => {
    // setLoadingState(true);
    const result = await searchMovies(value);
    if (result.Response === "True") {
      setError("");
      setMovies(result.Search);
    } else
      setError("No movies were found based on your search. Please try again.");
    setLoadingState(false);
  };

  useEffect(() => {
    fetchMovies(search);
  }, []);

  if (loadingState) return <Spinner />;

  return (
    <div className={classes["home-container"]}>
      {nominationAlert && (
        <Alertbox message="You have reached the nomination limit. Please unselect and select other" />
      )}

      <Input handleSearch={searchHandler} value={search} />
      {error && <Alertbox message={error} />}

      {!error && movies && (
        <div className={classes["movies"]}>
          {movies?.map((movie) => {
            return (
              <Link
                to={`movies/${movie.imdbID}`}
                className={classes["text-link"]}
                key={movie.imdbID}
              >
                <Card
                  id={movie.imdbID}
                  image={movie.Poster}
                  title={movie.Title}
                  year={movie.Year}
                  addNomination={(e) => nominationHandler(movie, e)}
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
