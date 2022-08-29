import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import noImage from "../assets/no-image-available.png";
import classes from "../styles/Card.module.css";

import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

const Card = ({ image, title, addNomination, isNominated }) => {
  return (
    <div className={classes.card}>
      <div className={classes.icon} onClick={addNomination}>
        {isNominated ? (
          <i>
            <FontAwesomeIcon icon={faStarSolid} color="##FFF700" size="2x" />
          </i>
        ) : (
          <i>
            <FontAwesomeIcon icon={faStarRegular} color="##FFF700" size="2x" />
          </i>
        )}
      </div>
      {image === "N/A" ? (
        <img src={noImage} alt={title} />
      ) : (
        <img src={image} alt={title} />
      )}

      <div className={classes.info}>
        <span className={classes.title}>{title}</span>
      </div>
    </div>
  );
};

export default Card;
