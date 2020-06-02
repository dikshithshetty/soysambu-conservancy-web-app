import React from "react";
import styles from "./BlogItem.module.scss";

const BlogItem = () => {
  return (
    <div className={styles["blog-item"]}>
      <section className={styles["grid-test"]}>
        <div className={styles["row"]}>
          <div className={styles["col-1-of-2"]}>Col 1 of 2</div>
          <div className={styles["col-2-of-2"]}>Col 2 of 2</div>
        </div>

        <div className={styles["row"]}>
          <div className={styles["col-1-of-2"]}>Col 1 of 2</div>
          <div className={styles["col-2-of-2"]}>Col 2 of 2</div>
        </div>
      </section>
    </div>
  );
};

export default BlogItem;
