import React from "react";
import { useField } from "formik";
import styles from "./InputField.module.scss";

const InputField = (props) => {
  const [field] = useField(props);

  return (
    <label htmlFor={props.name} className={styles["label"]}>
      {props.name}:<br />
      <input
        name={props.name}
        value={field.value}
        onChange={field.onChange}
        autoComplete="off"
        className={`${styles["input-field"]}`}
      />
    </label>
  )
};

export default InputField;
