import React from "react";
import styles from "./BlogItems.module.css";
import BlogItem from "./BlogItem/BlogItem";

const BlogItems = () => {
  return (
    <div className={styles["blog-items"]}>
      <BlogItem />
    </div>
  );
};

export default BlogItems;
