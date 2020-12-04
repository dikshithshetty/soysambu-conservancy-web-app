import React, { useRef, useEffect } from "react";
import styles from "./DraggerWrapper.module.scss";
import Dragger from "react-physics-dragger";

const DraggerWrapper = (props) => {
  /*
    Base Dragger component.
  */
  const draggerRef = useRef();

  /* Set location when setPos prop is passed. */
  useEffect(() => {
    if (draggerRef.current) {
      draggerRef.current.setPosition(props.setPos);
    }
  }, [props.setPos]);

  const renderDraggerElements = (items, name, elementStyling = "", elementAction = null) => {
    return items.map((item, index) => {
      return (
        <button
          type="button"
          value={item}
          key={`${name}-${index}`}
          id={`${name}-${index}`}
          className={`${styles["dragger-element"]} ${elementStyling}`}
        >
          <span>{item}</span>
          {elementAction ? elementAction(item) : null}
        </button>
      );
    });
  };

  return (
    <Dragger
      key={props.name}
      friction={0.8}
      className={`${styles["dragger"]}`}
      onFrame={props.onFrame}
      onStaticClick={props.onStaticClick}
      draggerRef={(r) => (draggerRef.current = r)}
    >
      {renderDraggerElements(props.items, props.name, props.elementStyling, props.elementAction)}
    </Dragger>
  );
};

export default DraggerWrapper;
