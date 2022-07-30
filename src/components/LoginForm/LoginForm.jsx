import React from 'react';
import { Form, Field, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import styles from './LoginForm.module.css';
import * as Yup from 'yup';
import sprite from '../../images/sprite.svg';

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
      validateOnMount
      onSubmit={async values => {
        await new Promise(r => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={loginSchema}
    >
      {({ errors, touched, isValid }) => (
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
            <svg className={styles.icon} width="21" height="16">
              <use href={sprite + '#icon-mail'} />
            </svg>
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

            <svg className={styles.icon} width="17" height="21">
              <use href={sprite + '#icon-lock'} />
            </svg>
          </div>
          <div className={styles.wrapper}>
            <button
              form="loginForm"
              type="submit"
              className={styles.btn}
              disabled={isValid ? false : true}
            >
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
