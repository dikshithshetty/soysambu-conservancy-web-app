import React, { useState } from "react";
import SectionSeparator from "../../../../components/SectionSeperator/SectionSeparator";
import SectionHeader from "../../../../components/Headers/SectionHeader/SectionHeader";
import DraggerCategoryCount from "../../../../components/Input/DraggerInputs/DraggerCategoryCount/DraggerCategoryCount";
import styles from "./GiraffeCountForm.module.scss";

const sectionStyling = {
  males: { type: "square", theme: "yellow-dark" },
  females: { type: "curved", theme: "yellow-light" },
  juveniles: { type: "curved", theme: "yellow-lighter" },
  unidentified: { type: "curved", theme: "white" },
};

const categories = ["Feeding", "Standing", "Walking", "Lying", "Fighting", "Scratching"];

const GiraffeCountForm = () => {
  const [category, setCategory] = useState("");
  const items = Object.keys(sectionStyling);


  const renderSections = () => {
    return Object.keys(sectionStyling).map((item, index) => {
      const type = sectionStyling[item].type;
      const theme = category === item ? "blue-selected" : sectionStyling[item].theme;
      let separator_color = index > 0 ? sectionStyling[items[index - 1]].theme : sectionStyling[item].theme;
      separator_color = category === items[index - 1] ? "blue-selected" : separator_color;

      return (
        <SectionSeparator key={item} type={type} theme={theme} separator_color={separator_color}>
          <SectionHeader span_color={theme}>{item}</SectionHeader>
          <DraggerCategoryCount name={item} items={categories} showCategoryView={category} setCategoryView={(c) => setCategory(c)} />
        </SectionSeparator>
      );
    });
  };

  return (
    // Turn nav-bar blue if last category is selected.
    <div className={`${styles["rows"]} ${category === items.slice(-1)[0] ? styles["nav-bar-blue"] : ''}`}>
      {renderSections()}
    </div>
  );
};

export default GiraffeCountForm;