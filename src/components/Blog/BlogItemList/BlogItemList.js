import React from "react";
import styles from "./BlogItemList.module.scss";

const BlogItemList = (props) => {
  return <div className={styles["blog-items"]}>{props.children}</div>;
};

export default BlogItemList;
