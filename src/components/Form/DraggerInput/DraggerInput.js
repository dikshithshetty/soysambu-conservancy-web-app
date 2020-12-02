import React, { Component } from "react";
import Dragger from "react-physics-dragger";
import { FaCheck } from "react-icons/fa";
import { Field } from "redux-form";
import styles from "./DraggerInput.module.scss";

const configs = {
  weather: {
    type: "select",
    items: ["Sunny", "Partially\nCloudy", "Cloudy", "Rain"],
  },
  habitat: {
    type: "select",
    items: ["Acacia\nWoodland", "Acacia\nMix", "Plains", "Lakefront"],
  },
};

class DraggerField extends Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      console.log(error);
    }
  };

  renderDraggerElements = (selectedItem, error, touched) => {
    const config = configs[this.props.config];
    return config.items.map((item) => {
      const selected = item === selectedItem ? <FaCheck /> : "";
      return (
        <button
          type="button"
          key={item}
          value={item}
          className={
            `${styles["dragger-element"]} ` +
            `${styles["dragger-" + config.type]} ` +
            `${error && touched ? styles["error"] : ""}`
          }
        >
          <span>{item}</span>
          {selected}
        </button>
      );
    });
  };

  renderDraggerInput = ({ input, meta }) => {
    return (
      <label className={styles["label"]}>
        {this.props.name}:<br />
        <Dragger
          key={this.props.name}
          className={styles["dragger"]}
          friction={0.8}
          value={{ val: input.value }}
          onStaticClick={(event) => {
            input.onChange(event.value);
          }}
        >
          {this.renderDraggerElements(input.value, meta.error, meta.touched)}
        </Dragger>
        {this.renderError(meta)}
      </label>
    );
  };

  render() {
    return <Field name={this.props.name} component={this.renderDraggerInput} />;
  }
}

export default DraggerField;
