import React, { useState } from "react";
import * as _ from "lodash";
import DraggerWrapper from "../../Dragger/DraggerWrapper/DraggerWrapper";
import PlusMinusButton from "../../Buttons/PlusMinusButton/PlusMinusButton";
import styles from "./DraggerGiraffes.module.scss";

const DraggerGiraffes = (props) => {
  /*
    The Count and Category daggers' movement are synced using DraggerWrapper setPos
    and onFrame methods.

    Props:
  */
  const categories = ["Feeding", "Standing", "Walking", "Lying", "Fighting", "Scratching"];
  const [showCategories, setShowCategories] = useState(false);
  const [countPos, setCountPos] = useState(0);
  const [categoryPos, setCategoryPos] = useState(0);

  const inputHandler = (item) => (
    <input
      name={item}
      type="number"
      value={props.input.value[item] || ""}
      onChange={({ target }) => {
        const state = _.cloneDeep(props.input.value);
        state[target.name] = Number(target.value);
        props.input.onChange(state);
      }}
      onBlur={({ target }) => {
        // Remove custom dragger element styling.
        target.parentNode.classList.remove(styles["count-selected"]);
      }}
    />
  );

  const renderCountDragger = () => {
    const pos = showCategories ? categoryPos : null;

    const handleCountClick = (event) => {
      const [input] = event.children;
      input.focus();
      // Add custom dragger element styling.
      event.classList.add(styles["count-selected"]);
    };

    return (
      <DraggerWrapper
        name={`count-${props.name}`}
        key={`count-${props.name}`}
        items={Object.keys(props.input.value)}
        friction={0.9}
        setPos={pos}
        onFrame={(f) => {
          setCountPos(f.x);
        }}
        elementStyling={styles["count"]}
        elementAction={(item) => inputHandler(item)}
        onStaticClick={(event) => handleCountClick(event)}
      />
    );
  };

  const renderCategoryDragger = () => {
    // Track countPos if categories are not shown.
    const pos = showCategories ? null : countPos;
    const items = Object.keys(props.input.value);

    const handleCategoryClick = (event) => {
      const state = _.cloneDeep(props.input.value);
      state[event.value] = event.value in state ? state[event.value] + 1 : 1;
      props.input.onChange(state);
      setShowCategories(!showCategories);
    };

    return (
      <div className={`${styles["categories"]} ${showCategories ? styles["show"] : ""}`}>
        <DraggerWrapper
          name={`count-${props.name}`}
          key={`count-${props.name}`}
          items={items.concat(_.difference(categories, items))}
          friction={0.9}
          setPos={pos}
          onFrame={(f) => {
            setCategoryPos(f.x);
          }}
          elementStyling={styles["count"]}
          elementAction={(item) => inputHandler(item)}
          onStaticClick={(event) => handleCategoryClick(event)}
        />
      </div>
    );
  };

  return (
    <div className={styles["counter"]}>
      {renderCountDragger()}
      {renderCategoryDragger()}
      {/* Add category button */}
      <PlusMinusButton
        active={showCategories}
        onClick={() => {
          setShowCategories(!showCategories);
        }}
      />
    </div>
  );
};

export default DraggerGiraffes;
