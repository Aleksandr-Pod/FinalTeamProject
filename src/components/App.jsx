import { Routes, Route } from 'react-router-dom';
// Components
import { PrivateRoute } from './privateRoute';
import { Dashboard } from '../pages/dashboard';
import { RedirectRoute } from './redirectRoute';
import { PageNotFound } from './pageNotFound/pageNotFound';
// import { Home } from './dashboard/home';
// import { Stat } from './dashboard/stat';
// import { Currency } from './dashboard/currency';
import { RegisterPage } from '../pages/registerPage';
import { LoginPage } from '../pages/loginPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/authOperations';
import { useSelector } from 'react-redux';
import transactionsOperations from '../redux/transactions/transactionOperations';

export const App = () => {
  const { isLogged } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLogged) {
      dispatch(transactionsOperations.getTransactions());
    }
  });
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
    </>
  );
};
