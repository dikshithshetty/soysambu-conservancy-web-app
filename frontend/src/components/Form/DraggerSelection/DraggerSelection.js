import React from "react";
import { FaCheck } from "react-icons/fa";
import DraggerWrapper from "../../Dragger/DraggerWrapper/DraggerWrapper";
import styles from "./DraggerSelection.module.scss";

const DraggerSelection = ({ input, meta, items }) => {
  /*
   */
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      console.log(error);
    }
  };

  return (
    <label className={styles["label"]}>
      {`${input.name}:`}
      <DraggerWrapper
        name={input.name}
        items={items}
        value={{ val: input.value }}
        elementAction={(item) => (input.value === item ? <FaCheck /> : "")}
        elementStyling={`${styles["select"]} ${meta.error && meta.touched ? styles["error"] : ""}`}
        onStaticClick={(event) => input.onChange(event.value)}
      />
      {renderError(meta)}
    </label>
  )
};

export default DraggerSelection;
