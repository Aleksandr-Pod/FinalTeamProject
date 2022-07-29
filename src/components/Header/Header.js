import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import sprite from '../../images/sprite.svg';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <NavLink exact to="./" className={styles.navLink}>
            <svg className={styles.logo} width="40" height="40">
              <use href={`${sprite}#icon-Group`}></use>
            </svg>
            <p className={styles.logoName}>Wallet</p>
          </NavLink>
        </div>
        <div className={styles.secondWrapper}>
          <p className={styles.user}>Name</p>
          <div className={styles.vl}></div>
          <button className={styles.exitButton}>
            <svg className={styles.exit} width="18" height="18">
              <use href={`${sprite}#icon-exit`}></use>
            </svg>
          </button>
          <button type="button" className={styles.button}>
            Exit
          </button>
        </div>
      </header>
    </>
  );
}