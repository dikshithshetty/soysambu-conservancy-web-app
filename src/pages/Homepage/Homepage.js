import React from "react";
import SectionSeparator from "../../components/SectionSeperator/SectionSeparator";
import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import BlogList from "../../components/Blog/BlogList/BlogList";
import NavBar from "../../components/Navigation/NavBar/NavBar";
import styles from "./Homepage.module.scss";

function Homepage() {
  return (
    <div className={styles["hero-header"]}>
      {/* Main Header */}
      <MainHeader theme="yellow-dark" />

      {/* Announcements */}
      <main>
        <SectionSeparator type="curved" theme="white">
          <section>
            <h2>Announcements</h2>
            <BlogList blogItems={["item1", "item2"]} />
          </section>
        </SectionSeparator>

        {/* What's New */}
        <SectionSeparator type="semi-circle" separator_color="white" theme="green">
          <section>
            <h2>What&apos;s New</h2>
            <BlogList blogItems={["item1"]} />
          </section>
        </SectionSeparator>
      </main>

      <NavBar />
    </div>
  );
}

export default Homepage;
