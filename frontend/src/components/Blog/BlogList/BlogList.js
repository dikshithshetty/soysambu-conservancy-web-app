import React from "react";
import styles from "./BlogList.module.scss";

const BlogList = (props) => {
  const mapBlogItems = props.items.map((blog) => {
    return (
        <div className={styles["blog-preview"]}>
          {props.thumbNail ? <div className={styles["blog-thumbnail"]} /> : ""}
          <div className={styles["blog-snippet"]}>
            <h3>Announcement Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elis cras... <span>read more</span></p>
          </div>
        </div>
    );
  });

  return <div className={styles["blog-list"]}>{mapBlogItems}</div>;
};

export default BlogList;
