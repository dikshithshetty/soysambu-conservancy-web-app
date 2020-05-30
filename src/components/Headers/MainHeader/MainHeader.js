import React from "react";
import styles from "./MainHeader.module.css";
import SectionSeparator from "../../SectionSeperator/SectionSeparator";

const MainHeader = (props) => {
  return (
    <header className={styles.header}>
      <SectionSeparator type="curved" style={styles["section-separator"]}>
        <h1 className={styles["header__title"]}>Soysambu Conservancy</h1>
      </SectionSeparator>
    </header>
  );
};

export default MainHeader;
