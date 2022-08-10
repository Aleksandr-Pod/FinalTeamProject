import { createPortal } from 'react-dom';
import { useEffect, useCallback } from 'react';
import sprite from '../../images/sprite.svg';
import styles from './modal.module.css';
import ModalAddTransaction from './modalAddTransaction/modalAddTransaction';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ showModal, setShowModal }) {
  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return createPortal(
    <>
      <button
        className={styles.button}
        type="button"
        aria-label="Open modal for add transaction"
        onClick={() => setShowModal(true)}
      >
        <svg className={styles.svg} width="20" height="20">
          <use href={`${sprite}#icon-plus`}></use>
        </svg>
      </button>
      {showModal && (
        <ModalAddTransaction
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </>,
    modalRoot,
  );
}
