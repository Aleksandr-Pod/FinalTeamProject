import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// Components
import PrivateRoute from './privateRoute';
import RedirectRoute from './redirectRoute';
import authOperations from '../redux/auth/authOperations';
import transactionsOperations from '../redux/transactions/transactionOperations';
import { fetchStatistics } from '../redux/statistics/statisticsOperations';

const RegisterPage = lazy(() => import('../pages/registerPage'));
const LoginPage = lazy(() => import('../pages/loginPage'));
const Dashboard = lazy(() => import('../pages/dashboard'));
const PageNotFound = lazy(() => import('../pages/pageNotFound'));
const RuPage = lazy(() => import('../pages/ru'));

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
              <Suspense>
                <LoginPage />
              </Suspense>
            </RedirectRoute>
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
        <Route
          path="/home/ru"
          element={
            <PrivateRoute>
              <Suspense>
                <RuPage />
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
