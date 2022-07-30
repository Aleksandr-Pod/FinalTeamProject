import { useDispatch } from 'react-redux';
import { toggleLogin } from '../redux/authSlice';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const login = () => {
    dispatch(toggleLogin(true));
  };

  return (
    <>
      <h3>LoginPage</h3>
      <button type="text" onClick={login}>
        Login
      </button>
    </>
  );
};
