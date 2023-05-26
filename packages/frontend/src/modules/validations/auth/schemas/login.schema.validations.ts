import * as yup from 'yup';
import { validatePassword } from './changePassword.schema';
export const loginSchema = yup.object().shape({
  email: yup.string().email(),
  pass: validatePassword()
});