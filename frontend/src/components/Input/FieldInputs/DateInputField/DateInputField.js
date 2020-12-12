import React, { Fragment } from "react";
import { useField, useFormikContext } from "formik";
import { parseISO } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { useDateInput, DatePicker } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import styles from './DateInputField.module.scss'

const DateInputField = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);

  // onChange handler for all date inputs.
  const onDateChange = (d) => {
    setFieldValue(field.name, d.toISOString());
    console.log(field.value)
  };

  // useDateInput hook from react-nice-dates for parsing text date input.
  const inputProps = useDateInput({
    date: parseISO(field.value),
    format: props.name === 'time' ? 'HH:mm' : 'yyyy/MM/dd',
    locale: enGB,
    onDateChange: onDateChange
  });

  const renderDateInputWithReset = (props) => (
    <Fragment>
      {/*<button type="button" onClick={() => onDateChange(new Date())}>Set today</button>*/}
      <input className={styles["input-field"]} {...inputProps} />
    </Fragment>
  );

  const renderDatePickerCalender = (props) => (
      <DatePicker
        date={parseISO(field.value)}
        onDateChange={onDateChange}
        locale={enGB}>
        {({ inputProps, focused }) => (
            <input
              className={`${'input' + (focused ? ' -focused' : '')} ${styles["input-field"]}`}
              {...inputProps}
            />
        )}
      </DatePicker>
  );

  return (
    <label htmlFor={props.name} className={styles["label"]}>
      {props.name}:<br/>
      {renderDateInputWithReset(props)}
    </label>
  )
};

export default DateInputField;