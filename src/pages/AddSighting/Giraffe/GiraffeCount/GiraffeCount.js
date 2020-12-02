import React, { Component, Fragment } from "react";
import { reduxForm } from "redux-form";
import SectionSeparator from "../../../../components/SectionSeperator/SectionSeparator";
import DraggerInput from "../../../../components/Form/DraggerInput/DraggerInput";
import styles from "./GiraffeCount.module.scss";
import { Link } from "react-router-dom";

class GiraffeCount extends Component {
  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    return (
      <div className={styles["giraffe-count"]}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
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
