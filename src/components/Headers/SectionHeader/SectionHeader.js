import React from "react";
import styles from "./SectionHeader.module.scss";

const SectionHeader = (props) => {
  const span_col = props.span_color ? styles["span--" + props.span_color] : "";
  return (
    <h2 className={`${styles["section-title"]} ${span_col}`}>
      <span>{props.children}</span>
    </h2>
  );
};

export default SectionHeader;
