import { Routes, Route } from 'react-router-dom';
// Components
import { RegisterForm } from './authForm/registerForm';
import { LoginForm } from './authForm/loginForm';
import { PrivateRoute } from './privateRoute';
import { Dashboard } from './dashboard/dashboard';
import { RedirectRoute } from './redirectRoute';
import { PageNotFound } from './pageNotFound/pageNotFound';
import { NavMenu } from './dashboard/navMenu';
import { Home } from './dashboard/home';
import { Diagram } from './dashboard/diagram';
import { Currency } from './dashboard/currency';

export const App = () => {
  return (
    <Routes>
      <Route
        path="/register"
        element={
          <RedirectRoute>
            <RegisterForm />
          </RedirectRoute>
        }
      />
      ;
      <Route
        path="/login"
        element={
          <RedirectRoute>
            <LoginForm />
          </RedirectRoute>
        }
      />
      ;
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Dashboard />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="diagram" element={<Diagram />}></Route>
          <Route path="currency" element={<Currency />}></Route>
        </Route>
        ;
      </Route>
      ;
      <Route path="*" element={<PageNotFound />} />;
    </Routes>
  );
};
