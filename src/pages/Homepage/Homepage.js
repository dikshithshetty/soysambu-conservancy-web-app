import React, { Fragment } from "react";
import SectionSeparator from "../../components/SectionSeperator/SectionSeparator";
import HeroHeader from "../../components/Headers/HeroHeader/HeroHeader";
import BlogList from "../../components/Blog/BlogList/BlogList";
import NavBar from "../../components/Navigation/NavBar/NavBar";
import styles from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <div className={styles["hero-header"]}>
      {/* Main Header */}
      <HeroHeader theme="yellow-dark">Soysambu Conservancy</HeroHeader>

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

      <nav>
        <NavBar active={0} />
      </nav>
    </div>
  );
};

export default Homepage;
