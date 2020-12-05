import React from "react";
import SectionSeparator from "../../components/SectionSeperator/SectionSeparator";
import HeroHeader from "../../components/Headers/HeroHeader/HeroHeader";
import BlogList from "../../components/Blog/BlogList/BlogList";
import NavBar from "../../components/Navigation/NavBar/NavBar";
import styles from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <div className={styles["hero-page"]}>
      {/* Main Header */}
      <HeroHeader theme="yellow-dark">Soysambu Conservancy</HeroHeader>

      {/* Announcements */}
      <main>
        <SectionSeparator type="curved" theme="white" separator_color="yellow-dark">
          <div className={styles["content"]}>
            <h2>Announcements</h2>
            <BlogList blogItems={["item1", "item2"]} thumbNail={true} />
          </div>
        </SectionSeparator>

        {/* What's New */}
        <SectionSeparator type="semi-circle" theme="green" separator_color="white">
          <div className={styles["content"]}>
            <h2>What's new</h2>
            <BlogList blogItems={["item1"]} />
          </div>
        </SectionSeparator>
      </main>

      <nav>
        <NavBar active={0} />
      </nav>
    </div>
  );
};

export default Homepage;
