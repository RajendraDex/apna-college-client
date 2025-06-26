import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { type ILoginFormValues } from '../../types/interfaces';

import classes from './auth-form.module.css';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

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
  
  const showPasswordHandler = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className={classes.container}>
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <label>Email</label>
        <input
          name="email"
          // placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        )}

        <label>Password</label>
        <div className={classes["password-wrapper"]}>
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formik.values.password}
            onChange={formik.handleChange}
            className={classes["password-input"]}
          />
          <button
            type="button"
            onClick={showPasswordHandler}
            className={classes["toggle-password"]}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {formik.touched.password && formik.errors.password && (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        )}

        <button type="submit">Login</button>
         <span>Don't have an account? <Link to='/register'>Sign up</Link></span>
      </form>
    </div>
  );
};

export default Login;
