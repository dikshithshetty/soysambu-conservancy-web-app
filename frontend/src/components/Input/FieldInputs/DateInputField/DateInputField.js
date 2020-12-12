import React from "react";
import { useField, useFormikContext } from "formik";
import { FaCalendarCheck, FaClock } from "react-icons/fa";
import { parseISO } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { useDateInput, DatePicker } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import styles from './DateInputField.module.scss'

const DateInputField = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  // onChange handler for all date inputs.
  // Standard ISO dates are always UTC, thus we compensate for this by manually adding
  // the timezone offset.
  const onDateChange = (d) => {
    const timeZoneOffset = d.getTimezoneOffset() * 60000; //offset in milliseconds.
    const localISOTime = (new Date(d - timeZoneOffset)).toISOString().slice(0, -1);
    setFieldValue(field.name, localISOTime);
  };

  // useDateInput hook from react-nice-dates for parsing text date input.
  const inputProps = useDateInput({
    date: parseISO(field.value),
    format: props.type === 'time' ? 'HH:mm' : 'yyyy/MM/dd',
    locale: enGB,
    onDateChange: onDateChange
  });

  const renderDateInputWithReset = (props) => {
    const button = props.type === 'time' ? <FaClock /> : <FaCalendarCheck />;
    return (
      <div className={styles["input"]}>
        <input className={`${styles["input-field"]} ${styles["input-field-has-button"]}`} {...inputProps} />
        <button className={styles["input-button"]} type="button" onClick={() => onDateChange(new Date())}>{button}</button>
      </div>
    )
  };

  const renderDatePickerCalendar = () => (
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

  const renderSwitch = (props) => {
    switch(props.type) {
      case 'calendar':
        return renderDatePickerCalendar(props);
      case 'time':
      case 'string':
        return renderDateInputWithReset(props);
      default:
        return null;
    }
  };

  return (
    <label htmlFor={props.name} className={styles["label"]}>
      {props.name}:<br/>
      {renderSwitch(props)}
    </label>
  )
};

export default DateInputField;