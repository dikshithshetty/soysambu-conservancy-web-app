import React from "react";
import SightingForm from "../../SightingForm/SightingForm";
import WizardForm, { WizardStep } from "../../../../components/Navigation/WizardForm/WizardForm";
import GiraffeCountForm from "../GiraffeCountForm/GiraffeCountForm";
import { connect } from 'react-redux';
import styles from "./GiraffeWizardForm.module.scss"
import { createGiraffeSighting } from "../../../../redux/actions";
import * as _ from "lodash";
import { SightingFormSchema } from "../../SightingForm/SightingFormSchema";
import { GiraffeCountFormSchema } from "../GiraffeCountForm/GiraffeCountFormSchema";
import { withRouter } from 'react-router';
import dayjs from "dayjs";

const GiraffeWizardForm = (props) => {
  const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);
  const handleSubmit = (values, action) => {
    // Format counts.
    let count = 0;
    const counts = [];
    const giraffe_types = ['males', 'females', 'juveniles', 'unidentified'];
    giraffe_types.forEach((type) => {
      if (!_.isEmpty(values[type])) {
        count += sumValues(values[type]);
        const giraffeCount = {"type": type.toUpperCase(), ...values[type]};
        counts.push(giraffeCount)
      }
    });
    // Format datetime.
    const [hours, minutes] = values.time.split(":");
    // const offset  = new Date().getTimezoneOffset() / 60
    values.date.setHours(hours); values.date.setMinutes(minutes);
    const localTime = dayjs(values.date).format('YYYY-MM-DDTHH:mmZ')
    console.log(localTime);

    const parsed_values = {
      datetime: localTime,
      longitude: values.longitude,
      latitude: values.latitude,
      weather: values.weather.toUpperCase().replace('\n', '_'),
      habitat: values.habitat.toUpperCase().replace('\n', '_'),
      count: count,
      counts: counts
    };

    action(parsed_values);
    props.history.push('/sightings/add');
  };

  return (
    <WizardForm
      initialValues={{
        datetime: new Date(),
        time: '',
        longitude: '',
        latitude: '',
        weather: '',
        habitat: '',
        males: {},
        females: {},
        juveniles: {},
        unidentified: {}
      }}
      onSubmit={async values => handleSubmit(values, props.createGiraffeSighting)}
    >
      {/* Location / general sighting form */}
      <WizardStep
        className={styles["inner-page"]}
        validationSchema={SightingFormSchema}>
        <SightingForm organism="Rothschild's Giraffe" theme="yellow-dark"/>
      </WizardStep>

      {/* Giraffe count form*/}
      <WizardStep
        className={styles["inner-page-no-header"]}
        validationSchema={GiraffeCountFormSchema}>
        <GiraffeCountForm/>
      </WizardStep>
    </WizardForm>
  );
};

export default withRouter(connect(null, { createGiraffeSighting })(GiraffeWizardForm));