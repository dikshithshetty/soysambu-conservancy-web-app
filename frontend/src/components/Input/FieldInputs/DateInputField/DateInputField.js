import React, { useEffect, useState } from "react";
import { useField, useFormikContext } from "formik";
import { SingleDatePicker } from 'react-google-flight-datepicker'
import "react-google-flight-datepicker/dist/main.css"
import "./DateInputField.scss";

const DateInputField = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  const [date, setDate] = useState(new Date());

  // Debounce setting formik value by 250ms.
  useEffect(() => {
    const timer = setTimeout(() => {
      setFieldValue(field.name, date);
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, [date, field.name, setFieldValue]);

  const renderSingleDatePicker = () => {
    const current_date = new Date();

    return (
      <label htmlFor={props.name} className={"label"}>
        {props.name}:<br />
        <SingleDatePicker
        startDate={date}
        onChange={(d) => setDate(d)}
        minDate={new Date(current_date.getFullYear(), current_date.getMonth(), 1)} // First day of month.
        maxDate={new Date()} // Today
        dateFormat="YYYY/MM/DD"
        className={"single-date-picker"}
        singleCalendar={true}
        startDatePlaceholder="Please select a date"
        highlightToday
        />
    </label>
    )
  };

  return renderSingleDatePicker();
};

export default DateInputField;