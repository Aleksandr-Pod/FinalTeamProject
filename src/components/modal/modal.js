import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  resetModalInitials,
  setShowModal,
} from '../../redux/transactions/transactionSlice';
import sprite from '../../images/sprite.svg';
import styles from './modal.module.css';
import ModalAddTransaction from './modalAddTransaction/modalAddTransaction';

const modalRoot = document.querySelector('#modal-root');

export default function Modal() {
  const dispatch = useDispatch();
  const { showModal, operation } = useSelector(state => state.transactions);

  useEffect(() => {
    const keyPress = e => {
      if (e.key === 'Escape' && showModal) {
        dispatch(resetModalInitials());
        dispatch(setShowModal(false));
      }
    };
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [dispatch, showModal]);

  return createPortal(
    <>
      <button
        className={styles.button}
        type="button"
        aria-label="Open modal for add transaction"
        onClick={() => dispatch(setShowModal(true))}
      >
        <svg className={styles.svg} width="20" height="20">
          <use href={`${sprite}#icon-plus`}></use>
        </svg>
      </button>
      {showModal && <ModalAddTransaction operation={operation} />}
    </>,
    modalRoot,
  );
}
