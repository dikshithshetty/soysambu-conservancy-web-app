import React from "react";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles["header__title"]}>Soysambu Conservancy</h1>
    </header>
  );
};

export default MainHeader;
