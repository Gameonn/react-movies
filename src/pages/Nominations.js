import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import Card from "../components/Card";
import classes from "../styles/Nominations.module.css";

const Nominations = () => {
  const { nominations, nominationHandler, nominationAlert } = useContext(
    MovieContext
  );

  return (
    <>
      {nominationAlert && <h4 className={classes.alert}>{nominationAlert}</h4>}

      {!nominations.length && (
        <div className={classes["nominate_warning"]}>
          There is no movie nominations.
        </div>
      )}
      {nominations && (
        <div className={classes["nominations"]}>
          {nominations.map(movie => (
            <Card
              key={movie.imdbID}
              image={movie.Poster}
              title={movie.Title}
              year={movie.Year}
              addNomination={e => nominationHandler(movie, e)}
              isNominated={movie.isNominated}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Nominations;
