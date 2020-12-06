import React from "react";
import styles from "./BackButton.module.scss";
import { Link } from "react-router-dom";

const BackButton = ({ origin }) => {
  return (
    <Link to={origin}>
      <div className={styles["button"]}>
        <i className={styles["left-arrow"]} />
      </div>
    </Link>
  );
};

export default BackButton;
