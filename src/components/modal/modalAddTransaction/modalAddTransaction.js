import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import {
  setShowModal,
  resetModalInitials,
  setOperation,
  setCurrentId,
} from '../../../redux/transactions/transactionSlice';
import transactionOperations from '../../../redux/transactions/transactionOperations';
import { fetchStatistics } from '../../../redux/statistics/statisticsOperations';
import { Spinner } from '../../spinner/spinner';
import sprite from '../../../images/sprite.svg';
import { categoriesType } from '../../categories';
import styles from './modalAddTransaction.module.css';
// import authOperations from '../../../redux/auth/authOperations';

export default function ModalAddTransaction({ operation }) {
  const { t } = useTranslation();
  const transactionSchema = Yup.object().shape({
    type: Yup.boolean(),
    amount: Yup.number()
      .positive()
      .min(0.01, t('addTransactions.errAmountLittleSum'))
      .max(999999, t('addTransactions.errAmountBigSum'))
      .required(t('addTransactions.errAmountReq')),
    date: Yup.string().required(t('addTransactions.errDate')),
    category: Yup.string()
      .matches(
        /(Regular|Unregular|Basic|Products|Car|Self|Kids|House|Education|Leisure|Other)/,
      )
      .required(),
    comment: Yup.string(),
  });

  const dispatch = useDispatch();
  const { isLoading, currentId, modalInitials } = useSelector(
    state => state.transactions,
  );
  const { income, expense } = categoriesType;

  const layOutClick = e => {
    if (e.currentTarget === e.target) {
      console.log('layOut click');
      handleCloseModal();
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    const amountNum = Number(values.amount).toFixed(2);
    const data = {
      amount: amountNum,
      isIncome: values.isIncome,
      date: transformDate(values.date),
      category: values.category,
      comment: values.comment,
    };
    if (operation === 'editTransaction') {
      data.transactionId = currentId;
    }
    await dispatch(transactionOperations[operation](data));
    await dispatch(fetchStatistics({}));
  };
  const handleCloseModal = () => {
    dispatch(setShowModal(false));
    dispatch(resetModalInitials());
    dispatch(setCurrentId(''));
    dispatch(setOperation('addTransaction'));
  };
  function transformDate(date) {
    return `${date.slice(8)}.${date.slice(5, 7)}.${date.slice(0, 4)}`;
  }
  const todayDate = new Date().toISOString().slice(0, 10);
  const currentMonth = new Date().toISOString().slice(5, 7);
  const currentStart = `2022-${currentMonth}-01`;

  const { isIncome, category, amount, date, comment } = modalInitials;

  return (
    <div className={styles.modalWrapper} onClick={layOutClick}>
      <div className={styles.content}>
        <button
          aria-label="Checkbox type transaction"
          className={styles.closeBtn}
          type="button"
          onClick={handleCloseModal}
        >
          <svg className={styles.iconClose} width="16" height="16">
            <use href={`${sprite}#icon-Group-56`}></use>
          </svg>
        </button>

        <p className={styles.title}>
          {operation === 'addTransaction'
            ? t('addTransactions.text')
            : 'EDIT transaction'}
        </p>

        <Formik
          initialValues={{
            isIncome,
            category,
            amount,
            date,
            comment,
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
                  <span className={styles.income}>
                    {t('addTransactions.income')}
                  </span>
                  <span className={styles.toggleSpan}>
                    <Field
                      name="isIncome"
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
                  <span className={styles.outcome}>
                    {t('addTransactions.expense')}
                  </span>
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
                      {t('addTransactions.select')}
                    </option>
                    {values.isIncome
                      ? income.map((el, id) => (
                          <option key={id} value={el}>
                            {el}
                          </option>
                        ))
                      : expense.map((el, id) => (
                          <option key={id} value={el.name}>
                            {el.name}
                          </option>
                        ))}
                  </Field>
                  {errors.category && touched.category && (
                    <div className={styles.errorWrapper}>
                      {t('addTransactions.errCategory')}
                    </div>
                  )}
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
                    {errors.amount && touched.amount && (
                      <div className={styles.errorWrapperAmount}>
                        {errors.amount}
                      </div>
                    )}
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
                    {errors.date && touched.date && (
                      <div className={styles.errorWrapper}>{errors.date}</div>
                    )}
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
                    placeholder={t('addTransactions.comment')}
                    autoComplete="off"
                  />
                  {errors.comment && touched.comment && (
                    <div className={styles.errorWrapperComment}>
                      {errors.comment}
                    </div>
                  )}
                </div>
                {/* SUBMIT */}
                <div className={styles.buttons}>
                  <button
                    form="transactionForm"
                    className={styles.addBtn}
                    type="submit"
                    disabled={isValid ? false : true}
                  >
                    {t('addTransactions.add')}
                  </button>
                  <button
                    className={styles.cancelBtn}
                    type="button"
                    onClick={handleCloseModal}
                  >
                    {t('addTransactions.cancel')}
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
