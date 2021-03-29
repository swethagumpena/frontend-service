import * as yup from 'yup';

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email()
    .required('email is required'),
  password: yup
    .string()
    .required('password is required'),
});

export default LoginSchema;
