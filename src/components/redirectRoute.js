import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RedirectRoute = ({ children }) => {
  const isLogged = useSelector(state => state.auth.isLogged);
  return <>{isLogged ? <Navigate to="/home" replace /> : children}</>;
};
export default RedirectRoute;
