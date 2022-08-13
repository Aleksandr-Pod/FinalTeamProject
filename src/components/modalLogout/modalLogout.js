import { useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import { Spinner } from '../spinner/spinner';
import styles from './modalLogout.module.css';

const modalRoot = document.getElementById('modal-root');

export default function ModalLogout({ closeModalLogout }) {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.auth);

  const logOut = () => {
    dispatch(authOperations.logOut());
  };

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModalLogout();
    }
  };

  const closeModalByEsc = e => {
    if (e.code === 'Escape') {
      closeModalLogout();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModalByEsc);
    return () => {
      window.removeEventListener('keydown', closeModalByEsc);
    };
  });

  return createPortal(
    <>
      <div className={styles.logoutWrapper} onClick={onBackdropClick}>
        <div className={styles.logoutContent}>
          {isLoading && <Spinner />}
          <h2 className={styles.logoutTitle}>Log out</h2>
          <p className={styles.logoutText}>Are you sure you want to log out?</p>
          <div className={styles.logoutButtons}>
            <button type="button" className={styles.logoutBtn} onClick={logOut}>
              Log Out
            </button>
            <button
              type="button"
              className={styles.logoutCancelBtn}
              onClick={() => closeModalLogout()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>,
    modalRoot,
  );
}
