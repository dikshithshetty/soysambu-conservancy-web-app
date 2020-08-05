import React, { Fragment } from "react";
import styles from "./BlogItem.module.scss";

const BlogItem = () => {
  return (
    <Fragment>
      <div className={styles["blog-thumbnail"]} />
      <div className={styles["blog-item"]}>
        <h3>Announcement Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elis cras...</p>
        <span>View more</span>
      </div>
    </Fragment>
  );
};

export default BlogItem;
