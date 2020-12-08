import React from "react";
import SectionSeparator from "../../components/SectionSeperator/SectionSeparator";
import HeroHeader from "../../components/Headers/HeroHeader/HeroHeader";
import BlogList from "../../components/Blog/BlogList/BlogList";
import MenuButton from "../../components/Buttons/MenuButton/MenuButton";
import NavBar from "../../components/Navigation/NavBar/NavBar";
import styles from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <div className={styles["hero-page"]}>
      {/* Menu Button */}
      <MenuButton />

      {/* Main Header */}
      <HeroHeader theme="yellow-dark">
        Soysambu Conservancy
      </HeroHeader>

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
        <NavBar preset="global" active={0} />
      </nav>
    </div>
  );
};

export default Homepage;
