import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import Card from "../components/Card";
import classes from "../styles/Nominations.module.css";
import Alertbox from "../components/Alertbox";

const Nominations = () => {
  const { nominations, nominationHandler, nominationAlert } =
    useContext(MovieContext);

  return (
    <>
      {nominationAlert && <Alertbox message={nominationAlert} />}

      {!nominations.length && (
        <div className={classes["nominate_warning"]}>
          There is no movie nominations.
        </div>
      )}
      {nominations && (
        <div className={classes["nominations"]}>
          {nominations.map((movie) => (
            <Card
              key={movie.imdbID}
              image={movie.Poster}
              title={movie.Title}
              year={movie.Year}
              addNomination={(e) => nominationHandler(movie, e)}
              isNominated={movie.isNominated}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Nominations;
