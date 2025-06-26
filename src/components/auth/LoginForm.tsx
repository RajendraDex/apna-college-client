import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { type ILoginFormValues } from '../../types/interfaces';

import classes from './auth-form.module.css';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik<ILoginFormValues>({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      console.log('Login:', values);
      // TODO: Handle login
      navigate('/');
    },
  });

  return (
    <div className={classes.container}>
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        )}

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.touched.password && formik.errors.password && (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        )}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
