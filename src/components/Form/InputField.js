import React from "react";
import styles from "./InputField.module.scss";

const get_date_range = () => {
  const date = new Date();
  const last_week = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
  return [last_week.toISOString().substr(0, 10), date.toISOString().substr(0, 10)];
};
const valid_date_range = get_date_range();

const InputField = (props) => {
  return (
    <label className={styles["label"]}>
      {props.name}:<br />
      <input className={styles["input-field"]} name={props.name} required />
    </label>
  );
};

export default InputField;
