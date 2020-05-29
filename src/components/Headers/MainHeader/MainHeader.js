import React from "react";
import styles from "./MainHeader.module.css";
import SectionSeparator from "../../SectionSeperator/SectionSeparator";

const MainHeader = (props) => {

    return (
        <header className={styles.header}>
            <SectionSeparator type="curved" color="yellow-dark" separator_color={styles['curved']}>
                <h1 className={styles['header-title']}>Soysambu Conservancy</h1>
            </SectionSeparator>
        </header>
    )
};

export default MainHeader