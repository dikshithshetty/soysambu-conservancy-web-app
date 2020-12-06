import React, { Fragment } from "react";
import styles from "./BlogList.module.scss";

const BlogList = ({ blogItems, thumbNail }) => {
  const mapBlogItems = blogItems.map((blog) => {
    return (
      <Fragment>
        <div className={styles["blog-preview"]}>
          {thumbNail ? <div className={styles["blog-thumbnail"]} /> : ""}
          <div className={styles["blog-snippet"]}>
            <h3>Announcement Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elis cras...</p>
            <span>View more</span>
          </div>
        </div>
      </Fragment>
    );
  });

  return <div className={styles["blog-list"]}>{mapBlogItems}</div>;
};

export default BlogList;