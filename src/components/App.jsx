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
import Modal from './modal/modal';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Modal />
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
