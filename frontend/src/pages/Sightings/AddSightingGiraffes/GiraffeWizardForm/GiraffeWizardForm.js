import React from "react";
import SightingForm from "../../SightingForm/SightingForm";
import WizardForm, { WizardStep } from "../../../../components/Navigation/WizardForm/WizardForm";
import GiraffeCountForm from "../GiraffeCountForm/GiraffeCountForm";
import styles from "./GiraffeWizardForm.module.scss"

const GiraffeWizardForm = () => (
  <WizardForm
    initialValues={{
      date: '',
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
    onSubmit={async values => console.log('Wizard submit', values)}
  >
    {/* Location / general sighting form */}
    <WizardStep
      className={styles["inner-page"]}
      onSubmit={() => console.log('Step1 onSubmit')}>
      <SightingForm organism="Rothschild's Giraffe" theme="yellow-dark" />
    </WizardStep>

    {/* Giraffe count form*/}
    <WizardStep
      className={styles["inner-page-no-header"]}
      onSubmit={() => console.log('Step2 onSubmit')}>
      <GiraffeCountForm/>
    </WizardStep>
  </WizardForm>
);

export default GiraffeWizardForm;