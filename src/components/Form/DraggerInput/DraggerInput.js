import React from "react";
import Dragger from "react-physics-dragger";
import { FaCheck } from "react-icons/fa";
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

const DraggerField = (props) => {
  const config = configs[props.config];
  const create_dragger_elements = config.items.map((string) => {
    return (
      <button key={string} className={`${styles["dragger-element"]} ${styles["dragger-" + config.type]}`}>
        <span>{string}</span>
        <FaCheck />
      </button>
    );
  });

  return (
    <label className={styles["label"]}>
      {props.name}:<br />
      <Dragger
        className={styles["dragger"]}
        friction={0.8}
        onStaticClick={(e) => {
          console.log(e);
        }}
      >
        {create_dragger_elements}
      </Dragger>
    </label>
  );
};

export default DraggerField;
