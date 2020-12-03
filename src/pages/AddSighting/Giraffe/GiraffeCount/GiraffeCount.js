import React, { Component, Fragment } from "react";
import { reduxForm } from "redux-form";
import SectionSeparator from "../../../../components/SectionSeperator/SectionSeparator";
import DraggerInput from "../../../../components/Form/DraggerInput/DraggerInput";
import styles from "./GiraffeCount.module.scss";
import { Link } from "react-router-dom";
import SectionHeader from "../../../../components/Headers/SectionHeader/SectionHeader";

class GiraffeCount extends Component {
  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    return (
      <div className={styles["giraffe-count"]}>
        <SectionSeparator type="square" theme="yellow-dark">
          <SectionHeader span_color="yellow-dark">Males</SectionHeader>
          <DraggerInput name="Males" config="count" />
        </SectionSeparator>

        <SectionSeparator type="curved" theme="yellow-light" separator_color="yellow-dark">
          <SectionHeader span_color="yellow-light">Females</SectionHeader>
          <DraggerInput name="Females" config="count" />
        </SectionSeparator>

        <SectionSeparator type="curved" theme="yellow-lighter" separator_color="yellow-light">
          <SectionHeader span_color="yellow-lighter">Juvenile</SectionHeader>
          <DraggerInput name="Juvenile" config="count" />
        </SectionSeparator>

        <SectionSeparator type="curved" theme="grey" separator_color="yellow-lighter">
          <SectionHeader span_color="white">Unidentified</SectionHeader>
          <DraggerInput name="Unidentified" config="count" />
        </SectionSeparator>

        <div className={styles["nav-bar"]}>
          <Link to="/sightings/add/giraffe">
            <button>Previous</button>
          </Link>
          <Link to="/sightings/add/">
            <button>Submit</button>
          </Link>
        </div>
      </div>
    );
  }
}

const validate = (formValues) => {
  let errors = {};
  return errors;
};

export default reduxForm({
  form: "AddSightingGiraffe",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(GiraffeCount);
