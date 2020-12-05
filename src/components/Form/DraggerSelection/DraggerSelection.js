import React from "react";
import { FaCheck } from "react-icons/fa";
import { Field } from "redux-form";
import DraggerWrapper from "../../Dragger/DraggerWrapper/DraggerWrapper";
import styles from "./DraggerSelection.module.scss";

const DraggerSelection = (props) => {
  /*
   */
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      console.log(error);
    }
  };

  const renderDraggerInput = ({ input, meta }) => (
    <label className={styles["label"]}>
      {`${props.name}:`}
      <DraggerWrapper
        name={props.name}
        items={props.items}
        value={{ val: input.value }}
        elementAction={(item) => (input.value === item ? <FaCheck /> : "")}
        elementStyling={`${styles["select"]} ${meta.error && meta.touched ? styles["error"] : ""}`}
        onStaticClick={(event) => input.onChange(event.value)}
      />
      {renderError(meta)}
    </label>
  );

  return <Field name={props.name} component={renderDraggerInput} />;
};

export default DraggerSelection;
