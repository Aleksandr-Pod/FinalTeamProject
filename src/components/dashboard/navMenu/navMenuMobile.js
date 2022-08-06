import { NavLink } from 'react-router-dom';
import styles from './navMenu.module.css';
import sprite from '../../../images/sprite.svg';

export const NavMenuMobile = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.list1}>
          <NavLink
            to="/home"
            children={({ isActive }) => {
              return (
                <>
                  <svg
                    className={
                      isActive ? `${styles.iconActive}` : `${styles.icon} `
                    }
                    width="38"
                    height="38"
                  >
                    <use href={`${sprite}#icon-home`}></use>{' '}
                  </svg>
                </>
              );
            }}
          />
        </li>
        <li className={styles.list1}>
          <NavLink
            to="/diagram"
            children={({ isActive }) => {
              return (
                <>
                  <svg
                    className={
                      isActive ? `${styles.iconActive}` : `${styles.icon} `
                    }
                    width="38"
                    height="38"
                  >
                    <use href={`${sprite}#icon-statistics`}></use>{' '}
                  </svg>
                </>
              );
            }}
          />
        </li>
        <li className={styles.list1}>
          <NavLink
            to="/currency"
            children={({ isActive }) => {
              return (
                <>
                  <svg
                    className={
                      isActive ? `${styles.iconActive}` : `${styles.icon} `
                    }
                    width="38"
                    height="38"
                  >
                    <use href={`${sprite}#icon-currency`}></use>
                  </svg>
                </>
              );
            }}
          />
        </li>
      </ul>
    </nav>
  );
};
