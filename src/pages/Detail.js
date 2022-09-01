import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { showMovieDetail } from "../api";
import Spinner from "../components/Spinner";
import noImage from "../assets/no-image-available.png";
import classes from "../styles/Detail.module.css";
import Alertbox from "../components/Alertbox";

const Detail = () => {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();
  const {
    Plot,
    Poster,
    Title,
    Director,
    Genre,
    imdbRating,
    Language,
    Released,
    Runtime,
    Writer,
  } = selectedMovie;

  const getMovieDetail = async (id) => {
    const result = await showMovieDetail(id);
    setLoadingState(false);
    if (result.Response) setSelectedMovie(result);
    else setError("Movie selected is not incorrect. Please try again.");
  };

  useEffect(() => {
    setLoadingState(true);
    setError("");
    getMovieDetail(id);
  }, [id]);

  if (loadingState) return <Spinner />;

  if (error)
    return (
      <div data-testid="movie-detail-error">
        <Alertbox message={error} />
      </div>
    );

  return (
    <div className={classes["detail-container"]} data-testid="movie-detail">
      <div className={classes["poster"]}>
        <img src={Poster === "N/A" ? noImage : Poster} alt={Title} />
      </div>
      <div className={classes["info"]}>
        <h1> {Title} </h1>
        <p> {Plot} </p>

        <h4>
          Released: <i> {Released} </i>
        </h4>
        <h4>
          Runtime: <i> {Runtime} </i>
        </h4>
        <h4>
          Genre: <i> {Genre} </i>
        </h4>
        <h4>
          IMDB Rating: <i> {imdbRating} </i>
        </h4>
        <h4>
          Director: <i> {Director} </i>
        </h4>
        <h4>
          Writer: <i> {Writer} </i>
        </h4>
        <h4>
          Language: <i> {Language} </i>
        </h4>
      </div>
    </div>
  );
};

export default Detail;
