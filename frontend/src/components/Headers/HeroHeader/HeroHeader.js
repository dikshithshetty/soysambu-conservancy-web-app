import React from "react";
import styles from "./HeroHeader.module.scss";

const HeroHeader = (props) => {
  return (
    <header className={`${styles["header"]} ${props.theme ? styles["theme--"+props.theme] : ''}`}>
      <h1 className={styles["hero-title"]}>{props.children}</h1>
    </header>
  );
};

export default HeroHeader;
