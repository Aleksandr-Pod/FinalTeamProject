import ruImg from '../images/img/ru.jpg';
import styles from './ru.module.css';

const RuPage = () => {
  return (
    <div className={styles.ruPage}>
      <p className={styles.text}>Вивчай українську, москалику!</p>
      <div className={styles.stamp}>
        <img className={styles.img} alt="russian boat" src={ruImg}></img>
      </div>
      <a className={styles.link} href="/home">
        Повернутися на домашню сторінку
      </a>
    </div>
  );
};

export default RuPage;
