import styles from './modalAddTransaction.module.css';
import { useState, useRef, useEffect, useCallback } from 'react';
import sprite from '../../../images/sprite.svg';
import { Form, Formik } from 'formik';
import { fetchCategories } from '../../../redux/categories/categoriesOperations';
import { useDispatch, useSelector } from 'react-redux';
import transactionOperations from '../../../redux/transactions/transactionOperations';
import { Spinner } from '../../spinner/spinner';


export default function ModalAddTransaction({ showModal, setShowModal }) {

  const { income, expense } = useSelector(state => state.categories);
  const dispatch = useDispatch();
  const [type, setType] = useState(true);
  const [category, setCategory] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [comment, setComment] = useState('');
  const modalRef = useRef();
  const { isLoading } = useSelector(state => state.transactions);
  console.log("ModalAdTransaction"); // это надо будет убрать

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (income.length === 0 || expense.length === 0) 
    dispatch(fetchCategories());
  }, [dispatch, expense.length, income.length]);
  

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

  const handleCheckbox = () => {
    setType(!type);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    const ind = e.target.selectedIndex;
    switch (name) {
      case 'amount':
        setAmount(value);
        break;
      case 'category':
        setCategory(value);
        setCategoryId(e.target.options[ind].id);
        break;
      case 'date':
        setDate(value);
        break;
      case 'comments':
        setComment(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const newDate = calcDate();
    const amountNum = Number(amount).toFixed(2);
    const data = {
      amount: amountNum,
      isIncome: type,
      date: newDate,
      category,
      categoryId,
      comment,
    };
    await dispatch(transactionOperations.addTransaction(data));
    setShowModal(false);
  };
  function calcDate() {
    const today = new Date();
    let day = today.getDate();
    if (day < 10) day = `0${day}`;
    let month = today.getMonth() + 1;
    if (month < 10) month = `0${month}`;
    return `${day}-${month}-${today.getFullYear()}`;
  }
  const todayDate = new Date().toISOString().slice(0, 10);
  return (
    <>
      {showModal ? (
        <div
          className={styles.modalWrapper}
          ref={modalRef}
          onClick={closeModal}
        >
          <div className={styles.content}>
            <button
              className={styles.closeBtn}
              type="button"
              onClick={() => setShowModal(prev => !prev)}
            >
              <svg className={styles.iconClose} width="16" height="16">
                <use href={`${sprite}#icon-Group-56`}></use>
              </svg>
            </button>

            <p className={styles.title}>Add transaction</p>

            <div className={styles.formModal}>
              <div className={styles.checkbox}>
                <span className={styles.income}>Income</span>
                <span className={styles.toggleSpan}>
                  <input
                    name="income"
                    type="checkbox"
                    className={styles.checkboxInput}
                    id="checkbox"
                    checked={type}
                    onChange={handleCheckbox}
                  />
                  <label htmlFor="checkbox"></label>
                </span>

                <span className={styles.outcome}>Expense</span>
              </div>

              <select
                name="category"
                className={styles.select}
                value={category}
                onChange={handleInputChange}
                id={categoryId}
              >
                <option>Select a category</option>

                {type
                  ? income.map(el => {
                      return (
                        <option key={el.id} value={el.name} id={el.id}>
                          {el.name}
                        </option>
                      );
                    })
                  : expense.map(el => {
                      return (
                        <option key={el.id} value={el.name} id={el.id}>
                          {el.name}
                        </option>
                      );
                    })}
              </select>

              <div className={styles.amount}>
                {isLoading && <Spinner />}
                <input
                  className={styles.inputAmount}
                  type="number"
                  name="amount"
                  placeholder="0.00"
                  value={amount}
                  required
                  onChange={handleInputChange}
                />
                <input
                  className={styles.inputDate}
                  type="date"
                  name="date"
                  value={todayDate}
                  min={todayDate}
                  max={todayDate}
                  required
                  onChange={handleInputChange}
                />
              </div>
              <input
                className={styles.inputText}
                type="text"
                name="comments"
                placeholder="Comment"
                autoComplete="off"
                value={comment}
                onChange={handleInputChange}
              />
              <div className={styles.buttons}>
                <button
                  className={styles.addBtn}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Add
                </button>
                <button
                  className={styles.cancelBtn}
                  type="button"
                  onClick={() => setShowModal(prev => !prev)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
