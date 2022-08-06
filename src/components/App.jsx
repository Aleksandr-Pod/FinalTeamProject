import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
// Components
import PrivateRoute from './privateRoute';
import RedirectRoute from './redirectRoute'; // ругается, если lazy import
// import PageNotFound from './pageNotFound/pageNotFound';
import { RegisterPage } from '../pages/registerPage';
import { LoginPage } from '../pages/loginPage';
import Dashboard from '../pages/dashboard';

import authOperations from '../redux/auth/authOperations';
import transactionsOperations from '../redux/transactions/transactionOperations';
import { fetchStatistics } from '../redux/statistics/statisticsOperations';
import { ToastContainer } from 'react-toastify';

// const PrivateRoute = lazy(() => import('./privateRoute'));
const PageNotFound = lazy(() => import('../pages/pageNotFound'));
// const RedirectRoute = lazy(() => import('./redirectRoute'));
// const Dashboard = lazy(() => import ('../pages/dashboard'));

export const App = () => {
  const { isLogged } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLogged) {
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
              <LoginPage />
            </RedirectRoute>
          }
        />
        <Route
          path="/register"
          element={
            <RedirectRoute>
              <RegisterPage />
            </RedirectRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectRoute>
              <LoginPage />
            </RedirectRoute>
          }
        />
        <Route
          path="/:activeBtn"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<PageNotFound path="/login" />} />;
      </Routes>
      <ToastContainer />
    </>
  );
};
