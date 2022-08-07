import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLogged = useSelector(state => state.auth.isLogged);
  console.log('Private Route');
  return <>{isLogged ? children : <Navigate to="/login" replace />}</>;
};
export default PrivateRoute;
