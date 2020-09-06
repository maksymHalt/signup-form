
const date = new Date()
const currentYear = date.getFullYear()
date.setFullYear(currentYear - 18)
const _18YearsAgo = date.getTime()

export type FormValues = {
  email?: string,
  password?: string,
  confirmPassword?: string,
  date_of_birth?: number,
  gender?: string,
  how_hear_about_us?: string,
}

type FormErrors = Omit<FormValues, 'date_of_birth'> & { date_of_birth?: string };

const validateSignUp = (values: FormValues) => {
  const errors: FormErrors = {}
  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email has invalid format'
  }
  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length < 6) {
    errors.password = 'Password should be minimum 6 characters long'
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm Password is required'
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords are not equal'
  }
  if (!values.date_of_birth) {
    errors.date_of_birth = 'Date of birth is required'
  } else {
    if (_18YearsAgo < values.date_of_birth) {
      errors.date_of_birth = 'You must be 18 year old or more'
    }
  }
  if (!values.gender) {
    errors.gender = 'Gender is required'
  }
  return errors
}

export default validateSignUp
