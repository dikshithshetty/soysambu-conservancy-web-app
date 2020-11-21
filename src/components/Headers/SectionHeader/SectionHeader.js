import React from "react";
import styles from "./SectionHeader.module.scss";

const SectionHeader = (props) => {
  return (
    <h2 className={styles["section-title"]}>
      <span>{props.children}</span>
    </h2>
  );
};

export default SectionHeader;
