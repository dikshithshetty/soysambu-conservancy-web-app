import React, { Fragment } from "react";
import SectionSeparator from "../../components/SectionSeperator/SectionSeparator";
import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import BlogItemList from "../../components/Blog/BlogItemList/BlogItemList";

function Homepage() {
  return (
    <Fragment>
      <SectionSeparator type="curved" theme="yellow-dark" separator_color="white">
        <MainHeader />
      </SectionSeparator>

      <SectionSeparator type="semi-circle" theme="white">
        <BlogItemList />
      </SectionSeparator>

      <SectionSeparator type="square" theme="green">
        <BlogItemList />
      </SectionSeparator>
    </Fragment>
  );
}

export default Homepage;
