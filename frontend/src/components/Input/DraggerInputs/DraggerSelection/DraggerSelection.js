import React from "react";
import { FaCheck } from "react-icons/fa";
import DraggerWrapper from "../../../Dragger/DraggerWrapper/DraggerWrapper";
import styles from "./DraggerSelection.module.scss";
import { useField, useFormikContext } from "formik";

const DraggerSelection = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);

  return (
    <label className={styles["label"]}>
      {`${props.name}:`}
      <DraggerWrapper
        name={props.name}
        items={props.items}
        value={field.value}
        elementAction={(item) => (field.value === item ? <FaCheck /> : "")}
        elementStyling={`${styles["select"]} ${meta.error && meta.touched ? styles["error"] : ""}`}
        onStaticClick={(event) => setFieldValue(field.name, event.value)}
      />
      {meta.error}
    </label>
  )
};

export default DraggerSelection;
