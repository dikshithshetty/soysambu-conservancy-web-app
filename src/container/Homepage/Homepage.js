import React, { Fragment } from "react";
import SectionSeparator from "../../components/SectionSeperator/SectionSeparator";
import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import BlogItems from "../../components/BlogItems/BlogItems";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <Fragment>
      <SectionSeparator type="curved" style={styles["section-separator"]}>
        <MainHeader />
      </SectionSeparator>

      <SectionSeparator type="semi-circle" style={styles["section-separator"]}>
        <BlogItems />
      </SectionSeparator>

      <SectionSeparator type="square" style={styles["section-separator"]}>
        <BlogItems />
      </SectionSeparator>
    </Fragment>
  );
}

export default Homepage;
