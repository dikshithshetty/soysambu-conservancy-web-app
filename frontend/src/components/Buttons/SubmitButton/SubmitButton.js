import React from "react";
import styles from "./SubmitButton.module.scss";
import useLongPress from '../../../hooks/useLongPress';

const SubmitButton = (props) => {
  const submitLongPress = useLongPress(props.onClick, 475);

  return (
    <button
      type="button"
      className={`${styles["submit-button"]}`}
      {...submitLongPress}
    >Submit</button>
  );
};

export default SubmitButton;
