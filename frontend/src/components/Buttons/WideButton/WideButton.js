import React from "react";
import styles from "./WideButton.module.scss";

const WideButton = (props) => {
  const style = styles["theme--" + props.theme];
  return <button className={`${styles["wide-button"]} ${style}`}>{props.children}</button>;
};

export default WideButton;
