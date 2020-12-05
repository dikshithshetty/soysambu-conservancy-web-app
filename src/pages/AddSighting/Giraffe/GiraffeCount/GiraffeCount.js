import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { Field } from "redux-form";
import SectionSeparator from "../../../../components/SectionSeperator/SectionSeparator";
import SectionHeader from "../../../../components/Headers/SectionHeader/SectionHeader";
import DraggerGiraffes from "../../../../components/Form/DraggerGiraffes/DraggerGiraffes";
import styles from "./GiraffeCount.module.scss";

class GiraffeCount extends Component {
  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    return (
      <div className={styles["giraffe-count"]}>
        {/* Counters */}
        <SectionSeparator type="square" theme="yellow-dark">
          <SectionHeader span_color="yellow-dark">Males</SectionHeader>
          <Field name="males" component={DraggerGiraffes} />
        </SectionSeparator>

        <SectionSeparator type="curved" theme="yellow-light" separator_color="yellow-dark">
          <SectionHeader span_color="yellow-light">Females</SectionHeader>
          <Field name="females" component={DraggerGiraffes} />
        </SectionSeparator>

        <SectionSeparator type="curved" theme="yellow-lighter" separator_color="yellow-light">
          <SectionHeader span_color="yellow-lighter">Juvenile</SectionHeader>
          <Field name="juveniles" component={DraggerGiraffes} />
        </SectionSeparator>

        <SectionSeparator type="curved" theme="grey" separator_color="yellow-lighter">
          <SectionHeader span_color="white">Unidentified</SectionHeader>
          <Field name="unidentified" component={DraggerGiraffes} />
        </SectionSeparator>

        {/* NavBar */}
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
  initialValues: {
    males: {},
    females: {},
    juveniles: {},
    unidentified: {},
  },
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(GiraffeCount);
