import { useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import { Spinner } from '../spinner/spinner';
import { useTranslation } from 'react-i18next';
import styles from './modalLogout.module.css';

const modalRoot = document.getElementById('modal-root');

export default function ModalLogout({ closeModalLogout }) {
  const { t } = useTranslation();
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
          <h2 className={styles.logoutTitle}>{t('logout.title')}</h2>
          <p className={styles.logoutText}>{t('logout.text')}</p>
          <div className={styles.logoutButtons}>
            <button type="button" className={styles.logoutBtn} onClick={logOut}>
              {t('logout.logout')}
            </button>
            <button
              type="button"
              className={styles.logoutCancelBtn}
              onClick={() => closeModalLogout()}
            >
              {t('logout.cancel')}
            </button>
          </div>
        </div>
      </div>
    </>,
    modalRoot,
  );
}
