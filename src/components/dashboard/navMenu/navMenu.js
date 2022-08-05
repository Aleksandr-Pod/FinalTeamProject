import { NavLink } from 'react-router-dom';
import styles from './navMenu.module.css';
import sprite from '../../../images/sprite.svg';

export const NavMenu = () => {
  return (
    <nav>
      <ul className={styles.ulColumn}>
        <li>
          <NavLink
            to="/home"
            style={{ textDecoration: 'none' }}
            className={styles.text}
            children={({ isActive }) => {
              return (
                <>
                  <svg
                    className={
                      isActive
                        ? `${styles.iconActive} ${styles.small}`
                        : `${styles.icon} ${styles.small}`
                    }
                    width="18"
                    height="18"
                  >
                    <use href={`${sprite}#icon-home`}></use>
                  </svg>
                  {'Home'}
                </>
              );
            }}
          />
        </li>
        <li>
          <NavLink
            to="/diagram"
            style={{ textDecoration: 'none' }}
            className={styles.text}
            children={({ isActive }) => {
              return (
                <>
                  <svg
                    className={
                      isActive
                        ? `${styles.iconActive} ${styles.small}`
                        : `${styles.icon} ${styles.small}`
                    }
                    width="18"
                    height="18"
                  >
                    <use href={`${sprite}#icon-statistics`}></use>
                  </svg>
                  {'Statistics'}
                </>
              );
            }}
          />
        </li>
        {/* <li className={styles.item}>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <svg
              className={`${styles.icon} ${styles.small}`}
              width="18"
              height="18"
            >
              <use href={`${sprite}#icon-home`}></use>
            </svg>
            <span className={styles.home}>Home</span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/diagram" style={{ textDecoration: 'none' }}>
            <svg
              className={`${styles.icon} ${styles.small}`}
              width="18"
              height="18"
            >
              <use href={`${sprite}#icon-statistics`}></use>
            </svg>
            <span className={styles.stat}>Statistics</span>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};
