import React, { useState } from "react";
import * as _ from "lodash";
import styles from "./DraggerCategoryCount.module.scss";
import { useField, useFormikContext } from "formik";
import DraggerWrapper from "../../../Dragger/DraggerWrapper/DraggerWrapper";
import PlusMinusButton from "../../../Buttons/PlusMinusButton/PlusMinusButton";

const DraggerCategoryCount = (props) => {
  /*
    The Count and Category daggers' movement are synced using DraggerWrapper setPos
    and onFrame methods.

    Props:
  */
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);

  const categories = props.items;
  const showCategory = props.showCategoryView === field.name;
  const [categoryOrder, setCategoryOrder] = useState(categories);

  const updateCategoryOrder = () => {
    const items = Object.keys(field.value);
    setCategoryOrder(items.concat(_.difference(categories, items)));
  };


  const renderInputHandler = (item) => (
    <input
      name={item}
      type="number"
      value={field.value[item] || ""}
      // Always place cursor at the end of value.
      onFocus={({ target }) => {
        target.value = '';
        target.value = field.value[target.name];
      }}
      // Update state with new value.
      onChange={({ target }) => {
        const state = _.cloneDeep(field.value);
        state[target.name] = Number(target.value);
        setFieldValue(field.name, state);
      }}
      onBlur={({ target }) => {
        // Remove custom dragger element styling.
        target.parentNode.classList.remove(styles["count-selected"]);

        // Check if item should be removed (val == 0).
        if ( Number(target.value) === 0) {
          // TODO make sass utility classes for things like this.
          target.parentNode.classList.add(styles["fade-out"]);
          setTimeout(() => {
            const state = _.cloneDeep(field.value);
            delete state[target.name];
            setFieldValue(field.name, state);
            target.parentNode.classList.remove(styles["fade-out"]);
          }, 180);
        }
      }}
    />
  );

  const renderCountDragger = () => {
    const items = Object.keys(field.value);

    const handleCountClick = (event) => {
      const [input] = event.children;
      input.focus();
      event.classList.add(styles["count-selected"]);
      props.setCategoryView("");
    };

    const handleCategoryClick = (event) => {
      if (event.value) {
        const state = _.cloneDeep(field.value);
        state[event.value] = event.value in state ? state[event.value] + 1 : 1;
        setFieldValue(field.name, state);
      }
    };

    return (
      <DraggerWrapper
        name={props.name}
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
          showCategory ? props.setCategoryView("") : props.setCategoryView(props.name);
          updateCategoryOrder();
        }}
      />
    </div>
  );
};

export default DraggerCategoryCount;
