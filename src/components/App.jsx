import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
// Components
import PrivateRoute from './privateRoute';
import RedirectRoute from './redirectRoute'; // ругается, если lazy import
// import PageNotFound from './pageNotFound/pageNotFound';
// import RegisterPage from '../pages/registerPage';
// import LoginPage from '../pages/loginPage';
// import Dashboard from '../pages/dashboard';
import GoogleAuth from '../components/googleAuth/googleAuth';

import authOperations from '../redux/auth/authOperations';
import transactionsOperations from '../redux/transactions/transactionOperations';
import { fetchStatistics } from '../redux/statistics/statisticsOperations';
import { ToastContainer } from 'react-toastify';

const RegisterPage = lazy(() => import('../pages/registerPage'));
const LoginPage = lazy(() => import('../pages/loginPage'));
const Dashboard = lazy(() => import('../pages/dashboard'));
const PageNotFound = lazy(() => import('../pages/pageNotFound'));
// const PrivateRoute = lazy(() => import('./privateRoute'));
// const RedirectRoute = lazy(() => import('./redirectRoute'));

export const App = () => {
  const { isLogged } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLogged) {
      console.log('Getting transactions in App');
      dispatch(transactionsOperations.getTransactions());
      dispatch(fetchStatistics({}));
    }
  }, [dispatch, isLogged]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RedirectRoute>
              <Suspense>
                <LoginPage />
              </Suspense>
            </RedirectRoute>
          }
        />
        <Route
          path="/home/google-user"
          element={
            <Suspense>
              <GoogleAuth />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <RedirectRoute>
              <Suspense>
                <RegisterPage />
              </Suspense>
            </RedirectRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectRoute>
              <Suspense>
                <LoginPage />
              </Suspense>
            </RedirectRoute>
          }
        />
        <Route
          path="/:activeBtn"
          element={
            <PrivateRoute>
              <Suspense>
                <Dashboard />
              </Suspense>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<PageNotFound path="/login" />} />;
      </Routes>
      <ToastContainer />
    </>
  );
};
