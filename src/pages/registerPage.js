import registerSvg from '../images/register.svg';
import PurpleEllipse from '../images/Ellipse1.svg';
import PeachEllipse from '../images/Ellipse2.svg';
import s from './registerPage.module.css';
import RegisterForm from '../components/RegisterForm/RegisterForm';

export const RegisterPage = () => {
  return (
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
  );
};
