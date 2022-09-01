import React from "react";

import classes from "../styles/Input.module.css";

const Input = ({ handleSearch }) => {
  return (
    <div className={classes["input-wrapper"]} aria-label="search-input">
      <input
        className="search"
        placeholder="Search your favorite movie"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Input;
