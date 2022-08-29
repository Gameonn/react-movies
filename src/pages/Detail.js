import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { MovieContext } from "../context/MovieContext";

import noImage from "../assets/no-image-available.png";
import classes from "../styles/Detail.module.css";

const Detail = () => {
  let { id } = useParams();
  const {
    showDetail,
    selectedMovie: {
      Title,
      Plot,
      Poster,
      Released,
      Genre,
      Runtime,
      imdbRating,
      Director,
      Writer,
      Language
    }
  } = useContext(MovieContext);
  useEffect(() => {
    showDetail(id);
  }, []);

  return (
    <div className={classes["detail-container"]}>
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
