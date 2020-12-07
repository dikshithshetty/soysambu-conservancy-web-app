import React from "react";
import styles from "./SubmitButton.module.scss";

const SubmitButton = (props) => {
  return (
    <button
      type="button"
      className={`${styles["submit-button"]}`}
      onClick={props.onClick}
    >Submit</button>
  );
};

export default SubmitButton;
