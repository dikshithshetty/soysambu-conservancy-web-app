import React, { Component } from "react";
import styles from "./InputField.module.scss";
import { Field } from "redux-form";

const get_date_range = () => {
  const date = new Date();
  const last_week = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
  return [last_week.toISOString().substr(0, 10), date.toISOString().substr(0, 10)];
};

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
