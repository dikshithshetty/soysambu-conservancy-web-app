import React, {Fragment} from 'react';
import MainHeader from '../../components/Headers/MainHeader/MainHeader'
import SectionSeparator from '../../components/SectionSeperator/SectionSeparator'


function Homepage() {
    return (
        <Fragment>
            {/* Header */}
            <MainHeader/>
            {/* Announcements */}
            <SectionSeparator type="semiCircle" color="white"/>
            {/* Whats new */}
            <SectionSeparator type="square" color="green"/>
            {/* NavBar */}
        </Fragment>

    )
}

export default Homepage