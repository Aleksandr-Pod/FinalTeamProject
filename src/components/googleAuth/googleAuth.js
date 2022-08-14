import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import { Spinner } from '../spinner/spinner';
import styles from './googleAuth.module.css';

const GoogleAuth = () => {
  const { isLogged, isAuthGoogle } = useSelector(state => state.auth);

  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogged) {
      navigate('/home', { replace: true });
    }
  }, [isLogged, navigate]);

  useEffect(() => {
    if (!isAuthGoogle) {
      dispatch(authOperations.loginGoogle({ email }));
    }
  }, [dispatch, email, isAuthGoogle]);

  return (
    <>
      <Spinner />
      <p className={styles.text}>Google auth...</p>
    </>
  );
};
export default GoogleAuth;
