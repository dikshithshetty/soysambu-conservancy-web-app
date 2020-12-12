import React from "react";
import { Link } from "react-router-dom";
import styles from "./AddSightingMenu.module.scss";
import PageHeader from "../../../components/Headers/PageHeader/PageHeader";
import SectionHeader from "../../../components/Headers/SectionHeader/SectionHeader";
import WideButton from "../../../components/Buttons/WideButton/WideButton";
import NavBar from "../../../components/Navigation/NavBar/NavBar";

const AddSightingMenu = () => {
  return (
    <div className={styles["standard-page"]}>
      <PageHeader theme="white">Add Sighting</PageHeader>

      <div className={styles["button-list"]}>
        <SectionHeader span_color="white">Select Animal</SectionHeader>
        <Link to="/sightings/add/giraffe">
          <WideButton theme="yellow-dark">Rothschild's Giraffes</WideButton>
        </Link>
        <WideButton theme="red">Lions</WideButton>
        <WideButton theme="blue">Colobus Monkeys</WideButton>
        <WideButton theme="green">Birds</WideButton>
      </div>

      <NavBar preset="global" active={2} />
    </div>
  );
};

export default AddSightingMenu;
