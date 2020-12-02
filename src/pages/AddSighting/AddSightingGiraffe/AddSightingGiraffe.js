import React from "react";
import InnerHeader from "../../../components/Headers/InnerHeader/InnerHeader";
import SectionSeparator from "../../../components/SectionSeperator/SectionSeparator";
import InputField from "../../../components/Form/InputField/InputField";
import DraggerInput from "../../../components/Form/DraggerInput/DraggerInput";
import styles from "./AddSightingGiraffe.module.scss";

const AddSightingMenu = () => {
  return (
    <div className={styles["inner-page"]}>
      <SectionSeparator type="curved-right" theme="blue" separator_color="yellow-dark">
        <InnerHeader origin="/sightings/add">
          Add Sighting <span>Rothschild's Giraffe</span>
        </InnerHeader>
      </SectionSeparator>

      {/*TODO section > form? */}
      <section>
        <SectionSeparator type="square" theme="yellow-dark">
          <div className={styles["form-input"]}>
            <InputField name="Date" />
            <InputField name="Time" />
            <InputField name="Longitude" />
            <InputField name="Latitude" />
          </div>
        </SectionSeparator>

        <SectionSeparator type="semi-circle" theme="white" separator_color="yellow-dark">
          <div className={styles["dragger-input"]}>
            <DraggerInput name="Weather" config="weather" />
            <DraggerInput name="Habitat" config="habitat" />
          </div>
        </SectionSeparator>
      </section>
      <div>nav</div>
    </div>
  );
};

export default AddSightingMenu;
