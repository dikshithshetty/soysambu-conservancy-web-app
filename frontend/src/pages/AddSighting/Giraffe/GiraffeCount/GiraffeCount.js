import React, { useState } from "react";
import { reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { Field } from "redux-form";
import SectionSeparator from "../../../../components/SectionSeperator/SectionSeparator";
import SectionHeader from "../../../../components/Headers/SectionHeader/SectionHeader";
import DraggerGiraffes from "../../../../components/Form/DraggerGiraffes/DraggerGiraffes";
import SubmitButton from "../../../../components/Buttons/SubmitButton/SubmitButton";
import { validateGiraffeSightingCount } from '../FormValidate';
import styles from "./GiraffeCount.module.scss";

const sectionStyling = {
  males: { type: "square", theme: "yellow-dark" },
  females: { type: "curved", theme: "yellow-light" },
  juveniles: { type: "curved", theme: "yellow-lighter" },
  unidentified: { type: "curved", theme: "white" },
};

const GiraffeCount = () => {
  const [category, setCategory] = useState("");
  const items = Object.keys(sectionStyling);

  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const renderSections = () => {
    return Object.keys(sectionStyling).map((item, index) => {
      const type = sectionStyling[item].type;
      const theme = category === item ? "blue-selected" : sectionStyling[item].theme;
      let separator_color = index > 0 ? sectionStyling[items[index - 1]].theme : sectionStyling[item].theme;
      separator_color = category === items[index - 1] ? "blue-selected" : separator_color;

      return (
        <SectionSeparator key={item} type={type} theme={theme} separator_color={separator_color}>
          <SectionHeader span_color={theme}>{item}</SectionHeader>
          <Field name={item} component={DraggerGiraffes} category={category} setCategory={(c) => setCategory(c)} />
        </SectionSeparator>
      );
    });
  };

  const renderNavBar = () => {
    const lastCategory = category === items.slice(-1)[0];
    return (
      <SectionSeparator
        type={"triangle"}
        theme={lastCategory ? "blue" : "white"}
        separator_color={lastCategory ? "blue-selected" : "white"}
      >
        <div className={lastCategory ? styles["nav-bar--blue"] : styles['nav-bar']}>
          <Link to="/sightings/add/giraffe">
              Previous
          </Link>
          <SubmitButton />
        </div>
      </SectionSeparator>
    );
  };

  return (
    <div className={styles["giraffe-count"]}>
      {renderSections()}
      {renderNavBar()}
    </div>
  );
};

export default reduxForm({
  form: "AddSightingGiraffe",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate: validateGiraffeSightingCount
})(GiraffeCount);
