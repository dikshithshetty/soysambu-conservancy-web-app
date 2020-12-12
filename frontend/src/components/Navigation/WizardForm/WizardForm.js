import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import SectionSeparator from "../../SectionSeperator/SectionSeparator";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";
import styles from './WizardForm.module.scss'

// Most of this component is based on the example Wizard provided by fornik.
// See: https://github.com/formium/formik/blob/master/examples/MultistepWizard.js
const Wizard = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const [snapshot, setSnapshot] = useState(initialValues);
  const steps = React.Children.toArray(children);
  const step = steps[stepNumber];
  const isLastStep = stepNumber === steps.length - 1;

  const next = values => {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, steps.length - 1));
  };

  const previous = values => {
    setSnapshot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };

  const handleSubmit = async (values, bag) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      next(values);
    }
  };

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {formik => (
        <Form className={step.props.className}>
          {step}
          <SectionSeparator type={"triangle"} theme={"white"} separator_color={"white"}>
            <div className={styles['nav-bar']}>
              {stepNumber > 0 && <button onClick={() => previous(formik.values)} type="button">Back</button>}
              {!isLastStep &&  <button disabled={formik.isSubmitting} type="submit">Next</button>}
              {isLastStep && <SubmitButton disabled={formik.isSubmitting} type="submit">Submit</SubmitButton>}
            </div>
          </SectionSeparator>
        </Form>
      )}
    </Formik>
  );
};

// WizardStep allows us to wrap form content with styling, and supply validation / submit logic.
export const WizardStep = ({children}) => children;
export default Wizard;