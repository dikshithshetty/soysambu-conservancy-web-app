import React, { Component } from "react";
import { FaCheck } from "react-icons/fa";
import { Field } from "redux-form";
import DraggerWrapper from "../../Dragger/DraggerWrapper/DraggerWrapper";
import styles from "./DraggerSelection.module.scss";

class DraggerSelection extends Component {
  /*
    Props:
  */
  renderError = ({ error, touched }) => {
    if (touched && error) {
      console.log(error);
    }
  };

  renderDraggerInput = ({ input, meta }) => {
    return (
      <label className={styles["label"]}>
        {`${this.props.name}:`}
        <DraggerWrapper
          name={this.props.name}
          items={this.props.items}
          value={{ val: input.value }}
          elementAction={(item) => {
            return input.value === item ? <FaCheck /> : "";
          }}
          elementStyling={`${styles["select"]} ${meta.error && meta.touched ? styles["error"] : ""}`}
          onStaticClick={(event) => {
            input.onChange(event.value);
          }}
        />
        {this.renderError(meta)}
      </label>
    );
  };

  render() {
    return <Field name={this.props.name} component={this.renderDraggerInput} />;
  }
}

export default DraggerSelection;
