import registerSvg from '../images/register.svg';
import PurpleEllipse from '../images/Ellipse1.svg';
import PeachEllipse from '../images/Ellipse2.svg';
import s from './registerPage.module.css';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import { Spinner } from '../components/spinner/spinner';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const { isLoading, error } = useSelector(state => state.auth);
  return (
    <>
      {error && toast(error)}
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={s.allPage}>
          <div className={s.leftSide}>
            <img className={s.logo} src={registerSvg} alt="logo" />
            <h3 className={s.text}>Finance App</h3>
          </div>
          <img className={s.purple} src={PurpleEllipse} alt="logo" />
          <img className={s.peach} src={PeachEllipse} alt="logo" />
          <div className={s.rightSide}>
            <div className={s.modal}>{<RegisterForm />}</div>
          </div>
        </div>
      )}
    </>
  );
};
export default RegisterPage;
