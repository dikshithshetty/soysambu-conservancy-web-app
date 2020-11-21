import React from "react";
import PageHeader from "../../../components/Headers/PageHeader/PageHeader";
import NavBar from "../../../components/Navigation/NavBar/NavBar";
import WideButton from "../../../components/Buttons/WideButton/WideButton";
import SectionHeader from "../../../components/Headers/SectionHeader/SectionHeader";
import { Link } from "react-router-dom";
import styles from "./AddSightingMenu.module.scss";

const AddSightingMenu = () => {
  return (
    <div className={styles["standard-page"]}>
      <PageHeader>Add Sighting</PageHeader>
      <div className={styles["button-list"]}>
        <SectionHeader>Select Animal</SectionHeader>
        <Link to="/sightings/add/giraffe">
          <WideButton theme="yellow-dark">Rothschild's Giraffe</WideButton>
        </Link>
        <WideButton theme="red">Lions</WideButton>
        <WideButton theme="blue">Colobus Monkeys</WideButton>
        <WideButton theme="green">Birds</WideButton>
      </div>
      <NavBar active={2} />
    </div>
  );
};

export default AddSightingMenu;
