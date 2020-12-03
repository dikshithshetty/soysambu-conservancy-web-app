import React, { useState } from "react";
import DraggerWrapper from "../../Dragger/DraggerWrapper/DraggerWrapper";
import PlusMinusButton from "../../Buttons/PlusMinusButton/PlusMinusButton";
import styles from "./DraggerGiraffes.module.scss";

const categories = ["Eating", "Walking", "Resting", "Fighting"];

const DraggerGiraffes = (props) => {
  /*
    The Count and Category daggers' movement are synced using DraggerWrapper setPos
    and onFrame methods.

    Props:
  */
  const [showCategories, setShowCategories] = useState(true);
  const [countPos, setCountPos] = useState(0);
  const [catPos, setCatPos] = useState(0);

  return (
    <div className={styles["counter"]}>
      {/* Count dragger */}
      <DraggerWrapper
        name={props.name}
        items={props.items}
        setPos={catPos}
        onFrame={(f) => {
          setCountPos(f.x);
        }}
        elementStyling={styles["count"]}
      />

      {/* Category dragger */}
      <div className={`${styles["categories"]} ${showCategories ? styles["show"] : ""}`}>
        <DraggerWrapper
          name="males-categories"
          items={categories}
          setPos={countPos}
          onFrame={(f) => {
            setCatPos(f.x);
          }}
          elementStyling={styles["count"]}
        />
      </div>

      {/* Add category button */}
      <PlusMinusButton
        callback={() => {
          setShowCategories(!showCategories);
        }}
      />
    </div>
  );
};

export default DraggerGiraffes;
