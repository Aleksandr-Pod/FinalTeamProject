import styles from './modalAddTransaction.module.css';
import { useState, useRef, useEffect, useCallback } from 'react';
import sprite from '../../../images/sprite.svg';

export default function ModalAddTransaction({ showModal, setShowModal }) {
    const modalRef = useRef();
    const [type, setType] = useState(true);
    const [category, setCategory] = useState('Select a category');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [comment, setComment] = useState('');

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && showModal) {
            setShowModal(false);
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);
    
    const handleCheckbox = () => {
        setType(!type);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'amount':
                setAmount(value);
                break;
            case 'category':
                setCategory(value);
                break;
            case 'date':
                setDate(value);
                break;
            case 'comment':
                setComment(value);
                break;
            default: return
        }
    };

    return (
        <>
            {showModal ?
                (<div className={styles.modalWrapper} ref={modalRef} onClick={closeModal}>
                    <div className={styles.content}>
                        <button className={styles.closeBtn}
                            type='button'
                            onClick={() => setShowModal(prev => !prev)}>
                            <svg className={styles.iconClose} width='16' height='16'>
                                <use href={`${sprite}#icon-Group-56`}></use>
                            </svg>
                        </button>
                        <p className={styles.title}>Add transaction</p>
                        <div className={styles.formModal}>
                            <div className={styles.checkbox}>
                                <span className={styles.income}>Income</span>
                                <span className={styles.toggleSpan}>
                                    <input name='income'
                                        type='checkbox'
                                        className={styles.checkboxInput}
                                        id='checkbox'
                                        checked={type}
                                        onChange={handleCheckbox}
                                    />
                                    <label htmlFor='checkbox'></label>
                                </span>

                                <span className={styles.outcome}>Expense</span>
                            </div>
                            {!type && (
                                <select name='category'
                                    className={styles.select}
                                    value={category}
                                    onChange={handleInputChange}
                                >
                                    <option>Select a category</option>
                                </select>
                            )}
                            <div className={styles.amount}>
                                <input
                                    className={styles.inputAmount}
                                    type='number'
                                    name='amount'
                                    placeholder='0.00'
                                    value={amount}
                                    required
                                    onChange={handleInputChange}
                                />
                                <input
                                    className={styles.inputDate}
                                    type='date'
                                    name='date'
                                    value={date}
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                            <input
                                className={styles.inputText}
                                type='text'
                                name='comments'
                                placeholder='Comment'
                                autoComplete='off'
                                // value={comment}
                                // onChange={handleInputChange}
                            />
                            <div className={styles.buttons}>
                                <button className={styles.addBtn} type='submit'>Add</button>
                                <button className={styles.cancelBtn} type='button' onClick={() => setShowModal(prev => !prev)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>) : null
            }</>
    );
}