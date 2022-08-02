import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
import sprite from '../../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
// import { toggleLogin } from '../../../redux/authSlice';
import authOperations from '../../../redux/auth/authOperations';

export default function Header() {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <NavLink to="/home" className={styles.navLink}>
            <svg className={styles.logo} width="40" height="40">
              <use href={`${sprite}#icon-Group`}></use>
            </svg>
            <p className={styles.logoName}>Wallet</p>
          </NavLink>
        </div>
        <div className={styles.secondWrapper}>
          <p className={styles.user}>{user.name}</p>
          <div className={styles.vl}></div>
          <div onClick={logOut}>
            <button className={styles.exitButton}>
              <svg className={styles.exit} width="18" height="18">
                <use href={`${sprite}#icon-exit`}></use>
              </svg>
            </button>
            <button
              onClick={() => dispatch(authOperations.logout())}
              type="button"
              className={styles.button}
            >
              Exit
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
