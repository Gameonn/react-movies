import React from "react";

import classes from "../styles/Input.module.css";

const Input = ({ handleSearch }) => {
  return (
    <div className={classes["input-wrapper"]}>
      <input
        className="search"
        placeholder="Search..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default Input;
