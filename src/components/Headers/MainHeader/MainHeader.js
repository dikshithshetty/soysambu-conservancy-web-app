import React from "react";
import styles from "./MainHeader.module.scss";

const MainHeader = (props) => {
  let style = [styles["header"], styles["theme--" + props.theme]];

  return (
    <header className={style.join(" ")}>
      <h1 className={styles["title"]}>Soysambu Conservancy</h1>
    </header>
  );
};

export default MainHeader;
