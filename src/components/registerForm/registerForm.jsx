import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import * as Yup from 'yup';
import { Form, Field, Formik } from 'formik';
import styles from './registerForm.module.css';
import sprite from '../../images/sprite.svg';
import logo from '../../images/logo.svg';
import PasswordStrengthBar from '../passwordStrengthBar/passwordStrengthBar';
import authOperations from '../../redux/auth/authOperations';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email must be valid')
    .min(2, 'Should be 2 chars min.')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Should be 6 chars min.')
    .max(12, 'Should be 12 chars max.')
    .required('Required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  firstName: Yup.string()
    .matches(/\S+/, 'The name cannot start with a space.')
    .min(1, 'Should be 1 chars min.')
    .max(12, 'Should be 12 chars max.')
    .matches(
      /^([A-Za-zа-яА-Я\s]*)?$/,
      'Only alphabets and spaces are allowed for this field.',
    )
    .required('Required'),
});

export default function RegisterForm() {
  const dispatch = useDispatch();

  return (
    <>
      <img src={logo} alt="logo" className={styles.logo} />
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordConfirmation: '',
          firstName: '',
        }}
        validateOnMount
        onSubmit={({ email, password, firstName }) => {
          dispatch(
            authOperations.register({ email, password, name: firstName }),
          );
        }}
        validationSchema={loginSchema}
      >
        {({ errors, touched, isValid, values }) => (
          <Form id="registerForm" className={styles.form}>
            <div className={styles.inputWrapper}>
              <Field
                className={styles.input}
                id="email"
                name="email"
                placeholder="E-mail"
                type="email"
                autoComplete="off"
              />
              {errors.email && touched.email && (
                <div className={styles.errorWrapper}>{errors.email}</div>
              )}

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
              {errors.password && touched.password && (
                <div className={styles.errorWrapper}>{errors.password}</div>
              )}
              {values.password.length > 0 && (
                <div className={styles.statusBarWrapper}>
                  <PasswordStrengthBar password={values.password} />
                </div>
              )}

              <svg className={styles.icon} width="17" height="21">
                <use href={sprite + '#icon-lock'} />
              </svg>
            </div>
            <div className={styles.inputWrapper}>
              <Field
                className={styles.input}
                id="passwordConfirmation"
                name="passwordConfirmation"
                placeholder="Confirm password"
                type="password"
                autoComplete="off"
              />
              {errors.passwordConfirmation && touched.passwordConfirmation && (
                <div className={styles.errorWrapper}>
                  {errors.passwordConfirmation}
                </div>
              )}

              <svg className={styles.icon} width="17" height="21">
                <use href={sprite + '#icon-lock'} />
              </svg>
            </div>

            <div className={styles.inputWrapper}>
              <Field
                className={styles.input}
                id="firstName"
                name="firstName"
                placeholder="First name"
                type="text"
                autoComplete="off"
              />
              {errors.firstName && touched.firstName && (
                <div className={styles.errorWrapper}>{errors.firstName}</div>
              )}

              <svg className={styles.icon} width="19" height="18">
                <use href={sprite + '#icon-user'} />
              </svg>
            </div>

            <div className={styles.wrapper}>
              <button
                form="registerForm"
                type="submit"
                className={styles.btn}
                disabled={isValid ? false : true}
              >
                Register
              </button>

              <NavLink to="/login" className={styles.link}>
                Log In
              </NavLink>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
}
