import * as Yup from 'yup';

export const todoValidationSchema = Yup.object({
  title: Yup.string().min(5).max(25).required('Required'),
  description: Yup.string().min(10).max(400).required('Required')
});
