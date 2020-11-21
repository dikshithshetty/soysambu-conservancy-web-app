import React from "react";
import PageHeader from "../../../components/Headers/PageHeader/PageHeader";
import NavBar from "../../../components/Navigation/NavBar/NavBar";
import styles from "./AddSightingMenu.module.scss";

function AddSightingMenu() {
  return (
    <div className={styles["standard"]}>
      <PageHeader className={styles["header-title"]}>Add Sighting</PageHeader>
      <div>Add Sighting</div>
      <NavBar active={2} />
    </div>
  );
}

export default AddSightingMenu;
