import type { FormValues, FormErrors } from '../types';

function isValidPercent(value: string): boolean {
  const num = parseFloat(value);
  return !isNaN(num) && num >= 0 && num <= 100;
}

/** Returns an error map; empty object means valid */
export function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.gender) errors.gender = 'Please select your gender';

  if (!values.ssc_p) {
    errors.ssc_p = 'SSC percentage is required';
  } else if (!isValidPercent(values.ssc_p)) {
    errors.ssc_p = 'Must be a number between 0 and 100';
  }

  if (!values.ssc_b) errors.ssc_b = 'Please select SSC board';

  if (!values.hsc_p) {
    errors.hsc_p = 'HSC percentage is required';
  } else if (!isValidPercent(values.hsc_p)) {
    errors.hsc_p = 'Must be a number between 0 and 100';
  }

  if (!values.hsc_b) errors.hsc_b = 'Please select HSC board';
  if (!values.hsc_s) errors.hsc_s = 'Please select HSC stream';

  if (!values.degree_p) {
    errors.degree_p = 'Degree percentage is required';
  } else if (!isValidPercent(values.degree_p)) {
    errors.degree_p = 'Must be a number between 0 and 100';
  }

  if (!values.degree_t) errors.degree_t = 'Please select degree type';
  if (!values.workex) errors.workex = 'Please select work experience';

  if (!values.etest_p) {
    errors.etest_p = 'Employability test score is required';
  } else if (!isValidPercent(values.etest_p)) {
    errors.etest_p = 'Must be a number between 0 and 100';
  }

  if (!values.specialisation) errors.specialisation = 'Please select specialisation';

  if (!values.mba_p) {
    errors.mba_p = 'MBA percentage is required';
  } else if (!isValidPercent(values.mba_p)) {
    errors.mba_p = 'Must be a number between 0 and 100';
  }

  return errors;
}
