import React, { Component, Fragment } from "react";
import { reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import SectionSeparator from "../../../../components/SectionSeperator/SectionSeparator";
import InnerHeader from "../../../../components/Headers/InnerHeader/InnerHeader";
import InputField from "../../../../components/Form/InputField/InputField";
import DraggerInput from "../../../../components/Form/DraggerInput/DraggerInput";
import styles from "./AddSightingGiraffe.module.scss";

class AddSightingMenu extends Component {
  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    return (
      <Fragment>
        <div className={styles["inner-page"]}>
          {/* Header */}
          <SectionSeparator type="curved-right" theme="blue" separator_color="yellow-dark">
            <InnerHeader origin="/sightings/add">
              Add Sighting <span>Rothschild's Giraffe</span>
            </InnerHeader>
          </SectionSeparator>

          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            {/* Form - Location info */}
            <SectionSeparator type="square" theme="yellow-dark">
              <div className={styles["form-input"]}>
                <InputField name="Date" />
                <InputField name="Time" />
                <InputField name="Longitude" />
                <InputField name="Latitude" />
              </div>
            </SectionSeparator>

            {/* Form - Environment info */}
            <SectionSeparator type="semi-circle" theme="white" separator_color="yellow-dark">
              <DraggerInput name="Weather" label="Weather" config="weather" />
              <DraggerInput name="Habitat" label="Habitat" config="habitat" />
            </SectionSeparator>

            {/* Form - Submit/Next */}
            <div className={styles["nav-bar"]}>
              <Link to="/sightings/add/giraffe-count">
                <button>Next</button>
              </Link>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

const validate = (formValues) => {
  let errors = {};

  // Missing values.
  if (!formValues.Date) {
    errors.Date = "Please enter a date";
  }
  if (!formValues.Time) {
    errors.Time = "Please enter a time";
  }
  if (!formValues.Longitude) {
    errors.Longitude = "Please enter a Longitude coordinate";
  }
  if (!formValues.Latitude) {
    errors.Latitude = "Please enter a Latitude coordinate";
  }
  if (!formValues.Weather) {
    errors.Weather = "Please enter a Longitude coordinate";
  }
  if (!formValues.Habitat) {
    errors.Habitat = "Please enter a Latitude coordinate";
  }

  return errors;
};

export default reduxForm({
  form: "AddSightingGiraffe",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(AddSightingMenu);
