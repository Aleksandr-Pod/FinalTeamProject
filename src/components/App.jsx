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
import { getCurrency } from '../redux/currency/currencyOperations';

const RegisterPage = lazy(() => import('../pages/registerPage'));
const LoginPage = lazy(() => import('../pages/loginPage'));
const Dashboard = lazy(() => import('../pages/dashboard'));
const PageNotFound = lazy(() => import('../pages/pageNotFound'));
const RuPage = lazy(() => import('../pages/ru'));

export const App = () => {
  const { user, isLogged, token, error } = useSelector(state => state.auth);
  const { transactions, error: transactionsError } = useSelector(
    state => state.transactions,
  );
  const { statData } = useSelector(state => state.statistics);
  const { currencies } = useSelector(state => state.currency);
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
  }, [dispatch, error, isLogged, transactionsError]);

  useEffect(() => {
    if (token) dispatch(authOperations.getCurrentUser());
  }, [dispatch, token]);

  useEffect(() => {
    if (isLogged && user.name) {
      if (!transactions.length) {
        console.log('App - Getting Transactions ...');
        dispatch(transactionsOperations.getTransactions());
      }
      if (!statData) {
        console.log('App - Getting Stats ...');
        dispatch(fetchStatistics({}));
      }
      if (!currencies.length) {
        console.log('App - Getting Currencies ...');
        dispatch(getCurrency());
      }
    }
  }, [
    dispatch,
    isLogged,
    statData,
    user.name,
    transactions.length,
    currencies.length,
  ]);

  return (
    <>
      <Routes>
        <Route path="/" element={
            <RedirectRoute><Suspense><LoginPage /></Suspense></RedirectRoute>
            }
        />
        <Route path="/home/google-user" element={<Suspense><GoogleAuth /></Suspense>}
        />
        <Route path="/register" element={
            <RedirectRoute><Suspense><RegisterPage /></Suspense></RedirectRoute>
          }
        />
        <Route path="/login" element={
            <RedirectRoute><Suspense><LoginPage /></Suspense></RedirectRoute>
          }
        />
        <Route path="/:activeBtn" element={
            <PrivateRoute><Suspense><Dashboard /></Suspense></PrivateRoute>
          }
        />
        <Route path="/home/ru" element={
            <PrivateRoute><Suspense><RuPage /></Suspense></PrivateRoute>
          }
        />
        <Route path="*" element={<PageNotFound path="/login" />} />;
      </Routes>
      <ToastContainer />
    </>
  );
};
