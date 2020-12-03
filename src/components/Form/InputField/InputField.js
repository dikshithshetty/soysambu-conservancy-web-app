import React, { Component } from "react";
import { Field } from "redux-form";
import styles from "./InputField.module.scss";

class InputField extends Component {
  renderError = (error, touched) => {
    if (touched && error) {
      console.log(error);
    }
  };

  renderInputField = ({ input, meta }) => {
    return (
      <label className={styles["label"]}>
        {this.props.name}:<br />
        <input
          {...input}
          key={this.props.name}
          className={`${styles["input-field"]} ${meta.error && meta.touched ? styles["error"] : ""}`}
          autoComplete="off"
        />
        {this.renderError(meta)}
      </label>
    );
  };

  render() {
    return <Field name={this.props.name} component={this.renderInputField} />;
  }
}

export default InputField;
