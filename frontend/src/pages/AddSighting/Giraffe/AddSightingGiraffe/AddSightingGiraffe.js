import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SectionSeparator from "../../../../components/SectionSeperator/SectionSeparator";
import InnerHeader from "../../../../components/Headers/InnerHeader/InnerHeader";
import InputField from "../../../../components/Form/InputField/InputField";
import DraggerSelection from "../../../../components/Form/DraggerSelection/DraggerSelection";
import styles from "./AddSightingGiraffe.module.scss";
import { Link } from "react-router-dom";

const weather = ["Sunny", "Partially\nCloudy", "Cloudy", "Rain"];
const habitat = ["Acacia\nWoodland", "Acacia\nMix", "Plains", "Lakefront"];

class AddSightingMenu extends Component {
  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    return (
      <div className={styles["inner-page"]}>
        {/* Header */}
        <SectionSeparator type="curved-bottom-right" theme="blue" separator_color="yellow-dark">
          <InnerHeader origin="/sightings/add">
            Add Sighting <span>Rothschild's Giraffe</span>
          </InnerHeader>
        </SectionSeparator>

        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          {/* Form - Location info */}
          <SectionSeparator theme="yellow-dark">
            <div className={styles["form-input"]}>
              <InputField name="date" />
              <InputField name="time" />
              <InputField name="longitude" />
              <InputField name="latitude" />
            </div>
          </SectionSeparator>

          {/* Form - Environment info */}
          <SectionSeparator type="semi-circle" theme="white" separator_color="yellow-dark">
            <DraggerSelection name="weather" items={weather} />
            <DraggerSelection name="habitat" items={habitat} />
          </SectionSeparator>
        </form>

        {/* Form - Submit/Next */}
        <div className={styles["nav-bar"]}>
          <Link to="/sightings/add/giraffe-count">
            Next
          </Link>
        </div>
      </div>
    );
  }
}

const validate = (formValues) => {
  let errors = {};

  // Missing values.
  if (!formValues.date) {
    errors.date = "Please enter a date";
  }
  if (!formValues.time) {
    errors.time = "Please enter a time";
  }
  if (!formValues.longitude) {
    errors.longitude = "Please enter a Longitude coordinate";
  }
  if (!formValues.latitude) {
    errors.latitude = "Please enter a Latitude coordinate";
  }
  if (!formValues.weather) {
    errors.weather = "Please enter a Longitude coordinate";
  }
  if (!formValues.habitat) {
    errors.habitat = "Please enter a Latitude coordinate";
  }

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
})(AddSightingMenu);
