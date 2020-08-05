import React from "react";
import styles from "./SectionSeparator.module.scss";

const SectionSeparator = (props) => {
  /*
    Props:
        type: type of section separator to use (see SectionSeparator css).
        theme: styling theme to use for the section separator.
        separator_color: color to use for the separator segment (see SectionSeparator css).
  */
  let style = [styles[props.type], styles["theme--" + props.theme]];

  // If a separator color is passed, add its corresponding style to the array.
  if (Object.prototype.hasOwnProperty.call(props, "separator_color")) {
    style.push(styles["separator--" + props.separator_color]);
  }

  return <div className={style.join(" ")}>{props.children}</div>;
};

export default SectionSeparator;
