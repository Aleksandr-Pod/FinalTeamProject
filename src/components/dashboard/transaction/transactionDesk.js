import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styles from './transactionDesk.module.css';
import { TransactionTableDesk } from './transactionTableDesk';
import { setCurrentId } from '../../../redux/transactions/transactionSlice';
import transactionsOperations from '../../../redux/transactions/transactionOperations';
import { fetchStatistics } from '../../../redux/statistics/statisticsOperations';

export const TransactionDesk = () => {
  const [showTableModal, setShowTableModal] = useState(false);
  const { t } = useTranslation();
  const { transactions, error, currentId } = useSelector(
    state => state.transactions,
  );
  const dispatch = useDispatch();

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showTableModal) {
        dispatch(setCurrentId(''));
        setShowTableModal(false);
      }
    },
    [dispatch, showTableModal],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const handleClick = id => {
    dispatch(setCurrentId(id));
    setShowTableModal(true);
  };

  const editRecord = () => {
    console.log('Edit record id:', currentId);
  };

  const deleteRecord = async () => {
    console.log('Delete record id:', currentId);
    await dispatch(
      transactionsOperations.deleteTransaction({
        transactionId: currentId,
      }),
    );
    if (error) return;
    await dispatch(fetchStatistics({}));
    setShowTableModal(false);
    dispatch(setCurrentId(''));
  };

  return (
    <>
      {transactions.length === 0 && (
        <>
          <p className={styles.transactionsText}>{t('transactions.text')}</p>
        </>
      )}
      {transactions.length > 0 && (
        <>
          <div className={styles.tableWrapper}>
            <table className={styles.transactionTable}>
              <thead>
                <tr className={styles.headString}>
                  <th className={styles.headDate}>{t('transactions.date')}</th>
                  <th>{t('transactions.type')}</th>
                  <th className={styles.headCategory}>
                    {t('transactions.category')}
                  </th>
                  <th className={styles.headComment}>
                    {t('transactions.comment')}
                  </th>
                  <th className={styles.headSum}>{t('transactions.sum')}</th>
                  <th className={styles.headBalance}>
                    {t('transactions.balance')}
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {transactions.map(
                  ({
                    _id,
                    date,
                    isIncome,
                    category,
                    comment,
                    amount,
                    balance,
                  }) => (
                    <TransactionTableDesk
                      key={_id}
                      id={_id}
                      handleClick={handleClick}
                      date={date}
                      isIncome={isIncome}
                      category={category}
                      comment={comment}
                      sum={amount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                      balance={balance
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                    />
                  ),
                )}
              </tbody>
            </table>
          </div>
          {showTableModal && (
            <div className={styles.layout}>
              <button onClick={editRecord}>EDIT</button>
              <button onClick={deleteRecord}>DELETE</button>
              <button
                className={styles.lastBtn}
                onClick={() => {
                  dispatch(setCurrentId(''));
                  setShowTableModal(false);
                }}
              >
                CANCEL
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};
