import React, {Fragment} from 'react';
import SectionSeparator from '../../components/SectionSeperator/SectionSeparator'
import styles from './Homepage.module.css'


function Homepage() {
    return (
        <Fragment>
            {/* Header */}
            <SectionSeparator type="curved" color="yellow-dark" separator_color={styles.curved}/>
            {/* Announcements */}
            <SectionSeparator type="semiCircle" color="white"/>
            {/* Whats new */}
            <SectionSeparator type="square" color="green"/>
            {/* NavBar */}
        </Fragment>

    )
}

export default Homepage