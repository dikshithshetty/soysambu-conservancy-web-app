import React from "react";
import styles from "./HeroHeader.module.scss";
import MenuButton from "../../Buttons/MenuButton/MenuButton";

const HeroHeader = (props) => {
  let style = [styles["header"], styles["theme--" + props.theme]];

  return (
    <header className={style.join(" ")}>
      <h1 className={styles["hero-title"]}>{props.children}</h1>
      <MenuButton />
    </header>
  );
};

export default HeroHeader;
