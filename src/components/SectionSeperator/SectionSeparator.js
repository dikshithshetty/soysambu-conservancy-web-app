import React from 'react'
import styles from './SectionSeparator.module.css'
import colors from '../../colors.module.css'

const SectionSeparator = (props) => {
    /*
    Props:
        type: type of section separator to use (see SectionSeparator css).
        color: background color to use (see colors css).
        separator_color: background color to use for the separator element, if applicable.
    */
    let background_color = props.color + '-background';
    let style = [styles[props.type], colors[background_color]];

    // If a custom separator style is passed, add them to style variable.
    if (props.hasOwnProperty('separator_color')) style.push(props.separator_color);

    return (
        <div className={style.join(' ')}>
            {props.children}
        </div>
    )
};

export default SectionSeparator