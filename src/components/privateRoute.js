import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoute = () => {
  // const isLogged = useSelector(state => state.auth.isLogged);
  const isLogged = false;
  console.log('Private Route');
  return <>{isLogged ? <Outlet /> : <Navigate to="/login" replace />}</>;
};
