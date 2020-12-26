import React from "react";
import styles from "./SubmitButton.module.scss";
import useLongPress from '../../../hooks/useLongPress';

const SubmitButton = (props) => {
  const submitLongPress = useLongPress(props.onClick, 700);

  return (
    <button
      type="button"
      disabled={props.disabled}
      className={`${styles["submit-button"]}`}
      {...submitLongPress}
    >Submit</button>
  );
};

export default SubmitButton;
