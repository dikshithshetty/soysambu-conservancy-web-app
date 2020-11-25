import React, { useState } from "react";
import styles from "./MenuButton.module.scss";

const MenuButton = () => {
  return (
    <div className={styles["button"]}>
      <i className={styles["hamburger-menu"]} />
    </div>
  );
};

export default MenuButton;
