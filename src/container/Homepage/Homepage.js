import React from "react";
import SectionSeparator from "../../components/SectionSeperator/SectionSeparator";
import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import BlogItemList from "../../components/Blog/BlogItemList/BlogItemList";
import BlogItem from "../../components/Blog/BlogItemList/BlogItem/BlogItem";
import NavBar from "../../components/Navigation/NavBar/NavBar";
import styles from "./Homepage.module.scss";

function Homepage() {
  return (
    <div className={styles["homepage"]}>
      {/* Main Header */}
      <MainHeader />

      {/* Announcements */}
      <main>
        <SectionSeparator type="curved" theme="white">
          <section>
            <h2>Announcements</h2>
            <BlogItemList>
              <BlogItem />
              <BlogItem />
            </BlogItemList>
          </section>
        </SectionSeparator>

        {/* What's New */}
        <SectionSeparator type="semi-circle" separator_color="white" theme="green">
          <section>
            <h2>What&apos;s New</h2>
            <BlogItemList>
              <BlogItem />
            </BlogItemList>
          </section>
        </SectionSeparator>
      </main>

      <NavBar />
    </div>
  );
}

export default Homepage;
