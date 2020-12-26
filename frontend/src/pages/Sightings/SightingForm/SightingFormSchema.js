import * as Yup from 'yup';

export const SightingFormSchema = Yup.object().shape({
  date: Yup.date()
    .default(() => new Date())
    .required('Required'),
  time: Yup.string()
    .matches(
      '^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$',
      {message: "Time should be in military format (e.g. 16:15)"})
    .length(5)
    .trim()
    .required('Required'),
  longitude: Yup.number()
    .min(-180)
    .max(180)
    .required('Required'),
  latitude: Yup.number()
    .min(-90)
    .max(90)
    .required('Required'),
  weather: Yup.string()
    .required('Required'),
  habitat: Yup.string()
    .required('Required'),
});