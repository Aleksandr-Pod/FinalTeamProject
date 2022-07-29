import React from 'react';
import { Form, Field, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import styles from './LoginForm.module.css';
import Button from '../Button/Button';
import { ReactComponent as EmailIcon } from './images/email.svg';
import { ReactComponent as PasswordIcon } from './images/passwordIcon.svg';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Email must be valid').required('Required'),
  password: Yup.string()
    .min(6, 'Should be 6 chars min.')
    .max(12, 'Should be 12 chars max.')
    .required('Required'),
});

export default function LoginForm() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async values => {
        await new Promise(r => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={loginSchema}
    >
      {({ errors, touched }) => (
        <Form id="loginForm" className={styles.form}>
          <div className={styles.inputWrapper}>
            <Field
              className={styles.input}
              id="email"
              name="email"
              placeholder="E-mail"
              type="email"
              autoComplete="off"
            />
            {errors.email && touched.email ? (
              <div className={styles.errorWrapper}>{errors.email}</div>
            ) : null}
            <EmailIcon className={styles.icon} />
          </div>

          <div className={styles.inputWrapper}>
            <Field
              className={styles.input}
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              autoComplete="off"
            />
            {errors.password && touched.password ? (
              <div className={styles.errorWrapper}>{errors.password}</div>
            ) : null}
            <PasswordIcon className={styles.icon} />
          </div>
          <div className={styles.wrapper}>
            <button form="loginForm" type="submit" className={styles.btn}>
              LOG IN
            </button>
            <NavLink to="register" className={styles.link}>
              REGISTRATION
            </NavLink>
          </div>
        </Form>
      )}
    </Formik>
  );
}
