import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
import sprite from '../../../images/sprite.svg';
import { useSelector } from 'react-redux';
import { useState } from 'react';
// import { toggleLogin } from '../../../redux/authSlice';
// import authOperations from '../../../redux/auth/authOperations';

import ModalLogout from '../../modalLogout/modalLogout';

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const { user } = useSelector(state => state.auth);

  const toggleLogin = () => {
    setShowModal(!showModal);
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
          <div className={styles.logOut}>
            <button className={styles.exitButton} onClick={toggleLogin}>
              <svg className={styles.exit} width="18" height="18">
                <use href={`${sprite}#icon-exit`}></use>
              </svg>
            </button>
            <button
              onClick={toggleLogin}
              type="button"
              className={styles.button}
            >
              Exit
            </button>
            {showModal && <ModalLogout closeModalLogout={toggleLogin} />}
          </div>
        </div>
      </header>
    </>
  );
}
