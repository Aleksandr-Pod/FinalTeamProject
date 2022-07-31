import { useDispatch } from 'react-redux';
import loginSvg from '../images/login.svg';
import PurpleEllipse from '../images/Ellipse1.svg';
import PeachEllipse from '../images/Ellipse2.svg';
import { toggleLogin } from '../redux/authSlice';
import s from './loginPage.module.css';
import LoginForm from '../components/LoginForm/LoginForm';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const login = () => {
    dispatch(toggleLogin(true));
  };

  return (
    <div className={s.allPage}>
      <div className={s.leftSide}>
        <img className={s.logo} src={loginSvg} alt="logo" />
        <h3 className={s.text}>Finance App</h3>
      </div>
      <img className={s.purple} src={PurpleEllipse} alt="logo" />
      <img className={s.peach} src={PeachEllipse} alt="logo" />
      <div className={s.rightSide}>
        <div className={s.modal}>{<LoginForm />}</div>
      </div>
    </div>
  );
};
