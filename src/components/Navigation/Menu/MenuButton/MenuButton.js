import React, { useState } from "react";
import styles from "./MenuButton.module.scss";

const MenuButton = () => {
  return (
    <div className={styles["button"]}>
      <span className={styles["hamburger-menu"]}>&nbsp;</span>
    </div>
  );
};

export default MenuButton;
