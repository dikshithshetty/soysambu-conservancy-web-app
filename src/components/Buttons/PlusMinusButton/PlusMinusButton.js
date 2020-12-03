import React, { useEffect, useState } from "react";
import styles from "./PlusMinusButton.module.scss";

const PlusMinusButton = ({ callback }) => {
  const [checked, setChecked] = useState(false);

  useEffect(callback ? callback : () => {}, [checked]);

  return (
    <button
      type="button"
      className={`${styles["button"]} ${checked ? styles["checked"] : ""}`}
      onClick={() => {
        setChecked(!checked);
      }}
    />
  );
};

export default PlusMinusButton;
