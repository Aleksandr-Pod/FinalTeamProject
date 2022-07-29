import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RedirectRoute = ({ children }) => {
  const isLogged = useSelector(state => state.auth.isLogged);
  return <>{isLogged ? <Navigate to="/" replace /> : children}</>;
};
