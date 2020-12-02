import React from "react";
import styles from "./SectionSeparator.module.scss";

const SectionSeparator = (props) => {
  /*
    Props:
        type: type of section separator to use (see SectionSeparator css).
        theme: styling theme to use for the section separator.
        separator_color: color to use for the separator segment (see SectionSeparator css).
  */
  // If separator color is passed include its CSS class.
  const sep_style = props.separator_color ? styles["separator--" + props.separator_color] : "";

  return (
    <div className={`${styles[props.type]} ${styles["theme--" + props.theme]} ${sep_style}`}>
      {props.title ? <h2>{props.title}</h2> : null}
      {props.children}
    </div>
  );
};

export default SectionSeparator;
