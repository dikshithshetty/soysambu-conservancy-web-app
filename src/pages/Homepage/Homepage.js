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
        <SectionSeparator title="Announcements" type="curved" theme="white">
          <section>
            <BlogList blogItems={["item1", "item2"]} />
          </section>
        </SectionSeparator>

        {/* What's New */}
        <SectionSeparator title="What's New" type="semi-circle" separator_color="white" theme="green">
          <section>
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
