import React, { useEffect, useState } from "react";
import { useField, useFormikContext } from "formik";
import dayjs from "dayjs";
import styles from "../InputField/InputField.module.scss";
import { FaClock } from "react-icons/fa";

const TimeInputField = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  const [time, setTime] = useState(dayjs(new Date()).format("HH:mm"));

  useEffect(() => {
    setFieldValue(field.name, time)
  }, [field.name, setFieldValue, time]);


  return (
    <label htmlFor={props.name} className={styles["label"]}>
      {props.name}:<br />
      <div className={styles["input"]}>
        <input
          name={props.name}
          value={time}
          onBlur={field.onBlur}
          onChange={(t) => setTime(t.target.value)}
          autoComplete="off"
          className={`${styles["input"]} ${styles["input-field"]} ${styles["input-field-has-button"]}`}
        />
        <button type="button"
                className={styles["input-button"]}
                onClick={() => setTime(dayjs(new Date()).format("HH:mm"))}><FaClock />
        </button>
      </div>
      {meta.touched && meta.error ? <span>{meta.error}</span> : null}
    </label>
  )
};


export default TimeInputField;
