import React, { Fragment } from "react";
import SectionSeparator from "../../components/SectionSeperator/SectionSeparator";
import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import BlogItemList from "../../components/Blog/BlogItemList/BlogItemList";
import BlogItem from "../../components/Blog/BlogItemList/BlogItem/BlogItem";

function Homepage() {
  return (
    <Fragment>
      {/* Main Header */}
      <MainHeader />

      {/* Announcements */}
      <SectionSeparator type="curved" theme="white">
        <section>
          <h2>Announcements</h2>
          <BlogItemList>
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
    </Fragment>
  );
}

export default Homepage;
