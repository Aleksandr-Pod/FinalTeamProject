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
import { Currency } from './dashboard/currency/currency';

export const App = () => {
  return (
    <Currency />
    // <>
    //   <Modal/>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <RedirectRoute>
    //           <LoginPage />
    //         </RedirectRoute>
    //       }
    //     />
    //     <Route
    //       path="/register"
    //       element={
    //         <RedirectRoute>
    //           <RegisterPage />
    //         </RedirectRoute>
    //       }
    //     />
    //     <Route
    //       path="/login"
    //       element={
    //         <RedirectRoute>
    //           <LoginPage />
    //         </RedirectRoute>
    //       }
    //     />
    //     <Route
    //       path="/:activeBtn"
    //       element={
    //         <PrivateRoute>
    //           <Dashboard />
    //         </PrivateRoute>
    //       }
    //     />
    //     <Route path="*" element={<PageNotFound path="/login" />} />;
    //   </Routes>
    // </>
  );
};
