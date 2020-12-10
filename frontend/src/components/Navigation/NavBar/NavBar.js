import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaGlobeAfrica, FaCameraRetro, FaDatabase } from "react-icons/fa";
import styles from "./NavBar.module.scss";

const presets = {
  global: [
    {
      label: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      label: "Map",
      path: "",
      icon: <FaGlobeAfrica />,
    },
    {
      label: "Add Sighting",
      path: "/sightings/add",
      icon: <FaCameraRetro />,
    },
    {
      label: "Database",
      path: "",
      icon: <FaDatabase />,
    },
  ],
};

const NavBar = (props) => {
  const renderedNavItems = (items) =>
    items.map((item, index) => {
      const isActive = index === props.active ? styles["active"] : "";
      const isDisabled = item.path ? "" : styles["disabled"];

      return (
        <div key={item.label} className={`${styles["nav-item"]} ${isActive} ${isDisabled}`}>
          <Link to={item.path}>
            <span>
              {item.icon ? <i>{item.icon}</i> : ""}
              {item.label}
            </span>
          </Link>
        </div>
      );
    });

  return (
    <div className={`${styles["nav-bar"]}`}>
      {props.preset ? renderedNavItems(presets[props.preset]) : props.children}
    </div>
  );
};

export default NavBar;
