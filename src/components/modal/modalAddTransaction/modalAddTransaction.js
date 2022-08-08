import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';

import { fetchCategories } from '../../../redux/categories/categoriesOperations';
import transactionOperations from '../../../redux/transactions/transactionOperations';
import { fetchStatistics } from '../../../redux/statistics/statisticsOperations';
import { Spinner } from '../../spinner/spinner';
import sprite from '../../../images/sprite.svg';
import styles from './modalAddTransaction.module.css';

const transactionSchema = Yup.object().shape({
  type: Yup.boolean(),
  amount: Yup.number().positive().min(0.01).max(999999).required(),
  date: Yup.string().required(),
  category: Yup.string()
    .matches(
      /(Regular|Unregular|Basic|Products|Car|Self|Kids|House|Education|Leisure|Other)/,
    )
    .required(),
  comment: Yup.string(),
});

export default function ModalAddTransaction({ showModal, setShowModal }) {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.transactions);
  const { income, expense } = useSelector(state => state.categories);

  const layOutClick = e => {
    if (e.currentTarget === e.target) setShowModal(false);
  };

  useEffect(() => {
    if (income.length === 0 || expense.length === 0)
      dispatch(fetchCategories());
  }, [dispatch, expense.length, income.length]);

  const handleSubmit = async (values, { resetForm }) => {
    const amountNum = Number(values.amount).toFixed(2);
    const categoryId = getCategoryId(values);
    const data = {
      amount: amountNum,
      isIncome: values.income,
      date: transformDate(values.date),
      category: values.category,
      categoryId,
      comment: values.comment,
    };
    await dispatch(transactionOperations.addTransaction(data));
    await dispatch(fetchStatistics({}));
    setShowModal(false);
    resetForm();
  };

  function getCategoryId(values) {
    let categoryId;
    values.income
      ? income.forEach(el => {
          if (el.name === values.category) {
            categoryId = el.id;
          }
        })
      : expense.forEach(el => {
          if (el.name === values.category) {
            categoryId = el.id;
          }
        });
    return categoryId;
  }
  function transformDate(date) {
    return `${date.slice(8)}.${date.slice(5, 7)}.${date.slice(0, 4)}`;
  }
  const todayDate = new Date().toISOString().slice(0, 10);
  const currentMonth = new Date().toISOString().slice(5, 7);
  const currentStart = `2022-${currentMonth}-01`;
  return (
    <div className={styles.modalWrapper} onClick={layOutClick}>
      <div className={styles.content}>
        <button
          aria-label="Checkbox type transaction"
          className={styles.closeBtn}
          type="button"
          onClick={() => setShowModal(false)}
        >
          <svg className={styles.iconClose} width="16" height="16">
            <use href={`${sprite}#icon-Group-56`}></use>
          </svg>
        </button>

        <p className={styles.title}>Add transaction</p>

        <Formik
          initialValues={{
            income: false,
            category: '',
            amount: '',
            date: todayDate,
            comment: ' ',
          }}
          validateOnMount
          onSubmit={handleSubmit}
          validationSchema={transactionSchema}
        >
          {({
            errors,
            touched,
            values,
            isValid,
            setFieldValue,
            handleChange,
          }) => (
            <Form id="transactionForm">
              <div className={styles.formModal}>
                <div className={styles.checkbox}>
                  <span className={styles.income}>Income</span>
                  <span className={styles.toggleSpan}>
                    <Field
                      name="income"
                      type="checkbox"
                      className={styles.checkboxInput}
                      id="checkbox"
                      onChange={e => {
                        handleChange(e);
                        setFieldValue('category', '');
                      }}
                    />
                    <label htmlFor="checkbox"></label>
                  </span>
                  <span className={styles.outcome}>Expense</span>
                </div>
                {/* SELECT CATEGORY */}
                <div className={styles.wrapper}>
                  <Field
                    as="select"
                    name="category"
                    id="category"
                    className={styles.select}
                  >
                    <option className={styles.placeholder}>
                      Select a category{' '}
                    </option>
                    {values.income
                      ? income.map((el, id) => {
                          return (
                            <option key={id} value={el.name}>
                              {el.name}
                            </option>
                          );
                        })
                      : expense.map((el, id) => {
                          return (
                            <option key={id} value={el.name}>
                              {el.name}
                            </option>
                          );
                        })}
                  </Field>
                  {errors.category && touched.category ? (
                    <div className={styles.errorWrapper}>
                      {'please, select category'}
                    </div>
                  ) : null}
                </div>
                <div className={styles.amount}>
                  {/* AMOUNT */}
                  <div className={styles.wrapper}>
                    <Field
                      className={styles.inputAmount}
                      type="number"
                      name="amount"
                      id="amount"
                      placeholder="0.00"
                      required
                    />
                    {errors.amount && touched.amount ? (
                      <div className={styles.errorWrapperAmount}>
                        {errors.amount}
                      </div>
                    ) : null}
                  </div>
                  {/* DATE */}
                  <div className={styles.wrapper}>
                    <Field
                      className={styles.inputDate}
                      type="date"
                      name="date"
                      min={currentStart}
                      max={todayDate}
                      required
                    />
                    {errors.date && touched.date ? (
                      <div className={styles.errorWrapper}>{errors.date}</div>
                    ) : null}
                  </div>
                </div>
                {isLoading && <Spinner />}
                {/* COMMENT */}
                <div className={styles.wrapperComment}>
                  <Field
                    className={styles.inputText}
                    type="text"
                    id="comment"
                    name="comment"
                    placeholder="Comment"
                    autoComplete="off"
                  />
                  {errors.comment && touched.comment ? (
                    <div className={styles.errorWrapperComment}>
                      {errors.comment}
                    </div>
                  ) : null}
                </div>
                {/* SUBMIT */}
                <div className={styles.buttons}>
                  <button
                    form="transactionForm"
                    className={styles.addBtn}
                    type="submit"
                    disabled={isValid ? false : true}
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
