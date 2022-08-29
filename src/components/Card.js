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
        <i>
          <FontAwesomeIcon
            icon={isNominated ? faStarSolid : faStarRegular}
            color="##FFF700"
            size="2x"
          />
        </i>
      </div>
      <img src={image === "N/A" ? noImage : image} alt={title} />

      <div className={classes.info}>
        <span className={classes.title}>{title}</span>
      </div>
    </div>
  );
};

export default Card;
