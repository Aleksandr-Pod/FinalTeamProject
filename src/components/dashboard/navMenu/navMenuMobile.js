import { Link } from 'react-router-dom';
import styles from './navMenu.module.css';
import sprite from '../../../images/sprite.svg';

export const NavMenuMobile = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link to="/home">            
            <svg className={styles.icon} width="38" height="38">
              <use href={`${sprite}#icon-home`}></use>
            </svg>
          </Link>
        </li>
        <li>
          <Link to="/diagram">
            <svg className={styles.icon} width="38" height="38">
              <use href={`${sprite}#icon-statistics`}></use>
            </svg>
          </Link>
        </li>
        <li>          
          <Link to="/currency">
            <svg className={styles.icon} width="38" height="38">
              <use href={`${sprite}#icon-currency`}></use>
            </svg>
          </Link>
        </li>
      </ul>  
    </nav>
  );
};
