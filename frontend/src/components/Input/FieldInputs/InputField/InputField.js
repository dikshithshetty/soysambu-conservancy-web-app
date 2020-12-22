import React from "react";
import { useField } from "formik";
import styles from "./InputField.module.scss";

const InputField = (props) => {
  const [field, meta] = useField(props);

  return (
    <label htmlFor={props.name} className={styles["label"]}>
      {props.name}:<br />
      <input
        name={props.name}
        type={props.type}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        autoComplete="off"
        className={`${styles["input-field"]}`}
      />
      {meta.touched && meta.error ? <span>{meta.error}</span> : null}
    </label>
  )
};

export default InputField;
