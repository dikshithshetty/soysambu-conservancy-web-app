import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaGlobeAfrica, FaCameraRetro, FaDatabase } from "react-icons/fa";
import styles from "./NavBar.module.scss";

const navItems = [
  {
    label: "Home",
    path: "/",
    icon: <FaHome />,
  },
  {
    label: "Map",
    path: "/",
    icon: <FaGlobeAfrica />,
  },
  {
    label: "Add Sighting",
    path: "/sightings/add",
    icon: <FaCameraRetro />,
  },
  {
    label: "Database",
    path: "/",
    icon: <FaDatabase />,
  },
];

const NavBar = ({ active }) => {
  const renderedNavItems = navItems.map((item, index) => {
    const isActive = index === active ? styles["active"] : "";
    return (
      <Fragment key={index}>
        <Link to={item.path} className={`${styles["nav-item"]} ` + isActive}>
          <i>{item.icon}</i>
          {item.label}
        </Link>
      </Fragment>
    );
  });

  return <div className={styles["nav-bar"]}>{renderedNavItems}</div>;
};

export default NavBar;
