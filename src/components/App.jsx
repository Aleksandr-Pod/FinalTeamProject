import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// Components
import PrivateRoute from './privateRoute';
import GoogleAuth from '../components/googleAuth/googleAuth';
import RedirectRoute from './redirectRoute';
import authOperations from '../redux/auth/authOperations';
import { logOut } from '../redux/auth/authSlice';
import transactionsOperations from '../redux/transactions/transactionOperations';
import { resetTransactions } from '../redux/transactions/transactionSlice';
import { fetchStatistics } from '../redux/statistics/statisticsOperations';
import { resetStats } from '../redux/statistics/statisticsSlice';

const RegisterPage = lazy(() => import('../pages/registerPage'));
const LoginPage = lazy(() => import('../pages/loginPage'));
const Dashboard = lazy(() => import('../pages/dashboard'));
const PageNotFound = lazy(() => import('../pages/pageNotFound'));
const RuPage = lazy(() => import('../pages/ru'));

export const App = () => {
  const { user, isLogged, error } = useSelector(state => state.auth);
  const { transactions, error: transactionsError } = useSelector(
    state => state.transactions,
  );
  const { statData } = useSelector(state => state.statistics);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      isLogged &
      (error === 'jwt expired' || transactionsError === 'jwt expired')
    ) {
      dispatch(logOut());
      dispatch(resetTransactions());
      dispatch(resetStats());
    }
    if (!user.name) dispatch(authOperations.getCurrentUser());
  }, [dispatch, error, isLogged, transactionsError, user.name]);

  useEffect(() => {
    if (isLogged && !transactions.length) {
      // console.log("isLogged:", isLogged);
      // console.log("Transactions.length", transactions.length );
      console.log('App - Getting Transactions ...');
      dispatch(transactionsOperations.getTransactions());
    }
    if (isLogged && !statData) {
      // console.log("isLogged:", isLogged);
      // console.log("statData:", statData );
      console.log('App - Getting Stats ...');
      dispatch(fetchStatistics({}));
    }
  }, [dispatch, isLogged, statData, transactions.length]);

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
