import React from 'react';
import { Form, Field, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import styles from './RegisterForm.module.css';
import * as Yup from 'yup';
import sprite from '../../images/sprite.svg';
import logo from '../../images/logo.svg';
import PasswordStrengthBar from '../passwordStrengthBar/PasswordStrengthBar';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import { ToastContainer } from 'react-toastify';
import { Spinner } from '../spinner/spinner';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Email must be valid').required('Required'),
  password: Yup.string()
    .min(6, 'Should be 6 chars min.')
    .max(12, 'Should be 12 chars max.')
    .required('Required'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
  firstName: Yup.string().min(3, 'Should be 3 chars min.').required('Required'),
});

export default function RegisterForm() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.auth);
  return (
    <>
      <img src={logo} className={styles.logo} />
      {isLoading && <Spinner />}
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordConfirmation: '',
          firstName: '',
        }}
        validateOnMount
        onSubmit={async ({ email, password, firstName }) => {
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

            <div className={styles.inputWrapper}>
              <Field
                className={styles.input}
                id="passwordConfirmation"
                name="passwordConfirmation"
                placeholder="Confirm password"
                type="password"
                autoComplete="off"
              />
              {errors.passwordConfirmation && touched.passwordConfirmation ? (
                <div className={styles.errorWrapper}>
                  {errors.passwordConfirmation}
                </div>
              ) : null}
              {values.passwordConfirmation.length > 0 ? (
                <div className={styles.statusBarWrapper}>
                  <PasswordStrengthBar password={values.passwordConfirmation} />
                </div>
              ) : null}

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
              {errors.firstName && touched.firstName ? (
                <div className={styles.errorWrapper}>{errors.firstName}</div>
              ) : null}

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
