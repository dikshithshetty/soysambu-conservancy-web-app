import React from "react";
import styles from "./InnerHeader.module.scss";
import BackButton from "../../Buttons/BackButton/BackButton";

const InnerHeader = (props) => {
  return (
    <div className={styles["inner-header"]}>
      <BackButton origin={props.origin} />
      <h2 className={styles["header-title-subtitle"]}>{props.children}</h2>
    </div>
  );
};

export default InnerHeader;
