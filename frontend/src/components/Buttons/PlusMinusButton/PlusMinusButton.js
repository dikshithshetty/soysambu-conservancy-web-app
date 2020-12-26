import React from "react";
import styles from "./PlusMinusButton.module.scss";

const PlusMinusButton = (props) => {
  return (
    <button
      type="button"
      className={`${styles["button"]} ${props.active ? styles["active"] : ""}`}
      onClick={props.onClick}
    />
  );
};

export default PlusMinusButton;
