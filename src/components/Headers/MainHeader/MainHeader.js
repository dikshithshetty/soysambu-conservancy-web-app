import React from "react";
import styles from "./MainHeader.module.scss";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles["title"]}>Soysambu Conservancy</h1>
    </header>
  );
};

export default MainHeader;
