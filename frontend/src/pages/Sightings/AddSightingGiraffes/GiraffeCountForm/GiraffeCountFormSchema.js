import * as Yup from 'yup';
import * as _ from 'lodash';

export const GiraffeCountFormSchema = Yup.object().shape({
  males: Yup.object(),
  females: Yup.object(),
  juveniles: Yup.object(),
  unidentified: Yup.object(),
}).test(
  'atLeastOne',
  "you must provide at least one number",
  function (value) {
    const values = [value.males, value.females, value.juveniles, value.unidentified];
    if (values.every((v) => _.isEmpty(v))) {
      return this.createError({path:"unidentified", message: "Please try adding some giraffes!" });
    }
  }
);
