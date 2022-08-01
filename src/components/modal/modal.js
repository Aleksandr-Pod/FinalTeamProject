import { createPortal } from 'react-dom';
import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import styles from './modal.module.css';
import ModalAddTransaction from './modalAddTransaction/modalAddTransaction';

const modalRoot = document.querySelector('#modal-root');

export default function Modal() {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return createPortal(
        <>
            <button className={styles.button} type='button' onClick={openModal}>
                <svg className={styles.svg} width='20' height='20'>
                    <use href={`${sprite}#icon-plus`}></use>
                </svg>
            </button>
            <ModalAddTransaction showModal={showModal} setShowModal={setShowModal} />
        </>, modalRoot);
}