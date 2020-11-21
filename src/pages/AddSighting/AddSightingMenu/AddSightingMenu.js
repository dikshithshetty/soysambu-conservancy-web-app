import React from "react";
import PageHeader from "../../../components/Headers/PageHeader/PageHeader";
import NavBar from "../../../components/Navigation/NavBar/NavBar";
import WideButton from "../../../components/Buttons/WideButton/WideButton";
import styles from "./AddSightingMenu.module.scss";

function AddSightingMenu() {
  return (
    <div className={styles["standard-page"]}>
      <PageHeader className={styles["header-title"]}>Add Sighting</PageHeader>
      <div className={styles["button-list"]}>
        <WideButton theme="yellow-dark">Rothschild's Giraffes</WideButton>
        <WideButton theme="red">Lions</WideButton>
        <WideButton theme="blue">Colobus Monkeys</WideButton>
        <WideButton theme="green">Birds</WideButton>
      </div>
      <NavBar active={2} />
    </div>
  );
}

export default AddSightingMenu;
