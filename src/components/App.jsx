import { Routes, Route } from 'react-router-dom';
// Components
import { RegisterForm } from './authForm/registerForm';
import { LoginForm } from './authForm/loginForm';
import { PrivateRoute } from './privateRoute';
import { Dashboard } from './dashboard/dashboard';
import { RedirectRoute } from './redirectRoute';
import { PageNotFound } from './pageNotFound/pageNotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterForm />} />;
      <Route
        path="/login"
        element={
          <RedirectRoute>
            <LoginForm />
          </RedirectRoute>
        }
      />
      ;
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      ;
      <Route path="*" element={<PageNotFound />} />;
    </Routes>
  );
};
