import * as yup from 'yup';
import { validatePassword } from './changePassword.schema';
export const registerSchema = yup.object().shape({
  email: yup.string().email(),
  pass: validatePassword(),
  confirm: yup
    .string()
    .oneOf([yup.ref('pass')], 'Must match "password" field value'),
});
