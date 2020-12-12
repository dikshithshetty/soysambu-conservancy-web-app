import React, { useRef, useEffect } from "react";
import styles from "./DraggerWrapper.module.scss";
import Dragger from "react-physics-dragger";

/*
  Base Dragger component.
*/

const DraggerWrapper = ({
  name,
  items,
  disabled = false,
  friction = 0.9,
  onStaticClick = null,
  elementStyling = "",
  elementAction = null,
  setPos = null,
  resetPos = null,
  onFrame = null,
}) => {
  const draggerRef = useRef();

  // Sets dragger to a position specified by the setPos prop.
  useEffect(() => {
    if (draggerRef.current && setPos !== null) {
      draggerRef.current.setPosition(setPos);
    }
  }, [setPos]);

  useEffect(() => {
    if (draggerRef.current && resetPos) {
      draggerRef.current.setPosition(0);
    }
  }, [resetPos]);

  const renderDraggerElements = (items, name, elementStyling = "", elementAction = null) =>
    items.map((item, index) => {
      return (
        <button
          key={`${name}-${index}`}
          value={item}
          type="button"
          className={`${styles["dragger-element"]} ${elementStyling}`}
        >
          {elementAction ? elementAction(item) : null}
          <span>{item}</span>
        </button>
      );
    });

  return (
    <Dragger
      key={name}
      className={`${styles["dragger"]}`}
      friction={friction}
      disabled={disabled}
      onFrame={onFrame}
      onStaticClick={onStaticClick}
      draggerRef={(r) => (draggerRef.current = r)}
    >
      {items ? renderDraggerElements(items, name, elementStyling, elementAction) : ""}
    </Dragger>
  );
};

export default DraggerWrapper;
