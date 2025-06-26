import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { type IRegisterFormValues } from '../../types/interfaces';
import classes from './auth-form.module.css';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik<IRegisterFormValues>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().min(6).required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: (values) => {
      console.log('Register:', values);
      // TODO: Handle register
      navigate('/login');
    },
  });

  return (
    <div className={classes.container}>
      <h2>Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.touched.name && formik.errors.name && (
          <div style={{ color: 'red' }}>{formik.errors.name}</div>
        )}

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

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div style={{ color: 'red' }}>{formik.errors.confirmPassword}</div>
        )}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
