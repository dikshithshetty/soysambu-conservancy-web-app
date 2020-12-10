import React from "react";
import styles from "./InputField.module.scss";

const InputField = ({ input, meta }) => {
  const renderError = (error, touched) => {
    if (touched && error) {
      console.log(error);
    }
  };

  return (
    <label className={styles["label"]}>
      {input.name}:<br />
      <input
        {...input}
        key={input.name}
        className={`${styles["input-field"]} ${meta.error && meta.touched ? styles["error"] : ""}`}
        autoComplete="off"
      />
      {renderError(meta)}
    </label>
    )
};

export default InputField;
