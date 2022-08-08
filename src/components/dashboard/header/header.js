import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './header.module.css';
import sprite from '../../../images/sprite.svg';
import ModalLogout from '../../modalLogout/modalLogout';

export default function Header({ setShowTransactionModal }) {
  const [showModal, setShowModal] = useState(false);
  const { user } = useSelector(state => state.auth);
  const navigate = useNavigate();

  const toggleLogin = () => {
    setShowModal(!showModal);
  };
  const toHome = () => {
    setShowTransactionModal(false);
    navigate('/home');
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.navLink} onClick={toHome}>
            <svg className={styles.logo} width="40" height="40">
              <use href={`${sprite}#icon-Group`}></use>
            </svg>
            <p className={styles.logoName}>Wallet</p>
          </div>
        </div>
        <div className={styles.secondWrapper}>
          <p className={styles.user}>{user.name}</p>
          <div className={styles.vl}></div>
          <div className={styles.logOut} onClick={toggleLogin}>
            <button className={styles.exitButton}>
              <svg className={styles.exit} width="18" height="18">
                <use href={`${sprite}#icon-exit`}></use>
              </svg>
            </button>
            <button type="button" className={styles.button}>
              Exit
            </button>
            {showModal && <ModalLogout closeModalLogout={toggleLogin} />}
          </div>
        </div>
      </header>
    </>
  );
}
