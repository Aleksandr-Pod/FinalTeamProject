import { useNavigate } from 'react-router-dom';
import ruImg from '../images/img/ru.jpg';
import styles from './ru.module.css';

const RuPage = () => {
  const history = useNavigate();
  const handleBack = () => {
    history('/home');
  };
  return (
    <div className={styles.ruPage}>
      <p className={styles.text}>Вивчай українську, москалику!</p>
      <div className={styles.stamp}>
        <img className={styles.img} alt="russian boat" src={ruImg}></img>
      </div>
      <button className={styles.link} onClick={handleBack}>
        Повернутися на домашню сторінку
      </button>
    </div>
  );
};

export default RuPage;
