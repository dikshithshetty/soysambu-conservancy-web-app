import React from "react";
import styles from "./PageHeader.module.scss";
import MenuButton from "../../Navigation/Menu/MenuButton/MenuButton";

const MainHeader = (props) => {
  return (
    <header className={styles["page-header"]}>
      <h1 className={styles["header-title"]}>{props.children}</h1>
      <MenuButton />
    </header>
  );
};

export default MainHeader;
