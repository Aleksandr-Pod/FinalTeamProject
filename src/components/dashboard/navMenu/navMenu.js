import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './navMenu.module.css';
import sprite from '../../../images/sprite.svg';

export const NavMenu = () => {
  const { t } = useTranslation();
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
                  <span
                    className={
                      isActive ? `${styles.textActive}` : `${styles.link}`
                    }
                  >
                    {t('nav.home')}
                  </span>
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
                  <span
                    className={
                      isActive ? `${styles.textActive}` : `${styles.link}`
                    }
                  >
                    {t('nav.statistics')}
                  </span>
                </>
              );
            }}
          />
        </li>
      </ul>
    </nav>
  );
};
