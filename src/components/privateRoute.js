import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  // const isLogged = useSelector(state => state.auth.isLogged);
  const isLogged = true;
  console.log('Private Route');
  return <>{isLogged ? children : <Navigate to="/login" replace />}</>;
};
