import React from "react";
import styles from "./SectionSeparator.module.css";

const SectionSeparator = (props) => {
  /*
    Props:
        type: type of section separator to use (see SectionSeparator css).
        style: custom styling to use for the section separator.
    */
  let style = [styles[props.type], props.style];

  return <div className={style.join(" ")}>{props.children}</div>;
};

export default SectionSeparator;
