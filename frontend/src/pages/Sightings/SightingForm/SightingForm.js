import React, { Fragment } from "react";
import SectionSeparator from "../../../components/SectionSeperator/SectionSeparator";
import InnerHeader from "../../../components/Headers/InnerHeader/InnerHeader";
import DateInputField from "../../../components/Input/FieldInputs/DateInputField/DateInputField";
import InputField from "../../../components/Input/FieldInputs/InputField/InputField";
import DraggerSelection from "../../../components/Input/DraggerInputs/DraggerSelection/DraggerSelection";
import styles from "./SightingForm.module.scss";

// These categories are universal for all sightings.
const weather = ["Sunny", "Partially\nCloudy", "Cloudy", "Rain"];
const habitat = ["Acacia\nWoodland", "Acacia\nMix", "Plains", "Lakefront"];

const SightingForm = (props) =>  {
  return (
    <Fragment>
      <SectionSeparator type="curved-bottom-right" theme="blue" separator_color={props.theme}>
        <InnerHeader origin="/sightings/add">
          Add Sighting <span>{props.organism}</span>
        </InnerHeader>
      </SectionSeparator>

      <div>
        {/* Location info */}
        <SectionSeparator theme={props.theme}>
          <div className={styles["date-input"]}>
            <DateInputField name="date" type="string"/>
            <DateInputField name="time" type="time"/>
          </div>
          <div className={styles["location-input"]}>
            <InputField name="longitude" />
            <InputField name="latitude" />
          </div>
        </SectionSeparator>

        {/* Environment info */}
        <SectionSeparator type="semi-circle" theme="white" separator_color={props.theme}>
          <DraggerSelection name="weather" type="text" items={weather}/>
          <DraggerSelection name="habitat" type="text" items={habitat}/>
        </SectionSeparator>
      </div>
    </Fragment>
  );
};

export default SightingForm;