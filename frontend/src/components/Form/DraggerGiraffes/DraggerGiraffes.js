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
  const showCategory = props.category === props.input.name;
  const [categoryOrder, setCategoryOrder] = useState(categories);

  const updateCategoryOrder = () => {
    const items = Object.keys(props.input.value);
    setCategoryOrder(items.concat(_.difference(categories, items)));
  };

  const renderInputHandler = (item) => (
    <input
      name={item}
      type="number"
      value={props.input.value[item] || ""}
      onChange={({ target }) => {
        const state = props.input.value ? _.cloneDeep(props.input.value) : {};
        state[target.name] = Number(target.value);
        props.input.onChange(state);
      }}
      onBlur={({ target }) => {
        // Remove custom dragger element styling.
        target.parentNode.classList.remove(styles["count-selected"]);

        if ( Number(target.value) === 0) {
          // TODO make sass utility classes for things like this.
          target.parentNode.classList.add(styles["fade-out"]);
          setTimeout(() => {
            const state = props.input.value ? _.cloneDeep(props.input.value) : {};
            delete state[target.name];
            props.input.onChange(state);
            target.parentNode.classList.remove(styles["fade-out"]);
          }, 180);
        }
      }}
    />
  );

  const renderCountDragger = () => {
    const items = Object.keys(props.input.value);

    const handleCountClick = (event) => {
      const [input] = event.children;
      input.focus();
      event.classList.add(styles["count-selected"]);
      props.setCategory("");
    };

    const handleCategoryClick = (event) => {
      const state = props.input.value ? _.cloneDeep(props.input.value) : {};
      state[event.value] = event.value in state ? state[event.value] + 1 : 1;
      props.input.onChange(state);
    };

    return (
      <DraggerWrapper
        name={props.name}
        key={props.name}
        items={showCategory ? categoryOrder : items}
        friction={0.9}
        resetPos={items.length <= 3 && !showCategory}
        elementStyling={styles["count"]}
        elementAction={(item) => renderInputHandler(item)}
        onStaticClick={(event) => (showCategory ? handleCategoryClick(event) : handleCountClick(event))}
      />
    );
  };

  return (
    <div className={`${styles["counter"]} ${showCategory ? styles["counter-category"] : ""}`}>
      {renderCountDragger()}
      {/* Add category button */}
      <PlusMinusButton
        active={showCategory}
        onClick={() => {
          showCategory ? props.setCategory("") : props.setCategory(props.input.name);
          updateCategoryOrder();
        }}
      />
    </div>
  );
};

export default DraggerGiraffes;
