import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styles from './transactionDesk.module.css';
import { TransactionTableDesk } from './transactionTableDesk';

export const TransactionDesk = () => {
  const [showTableModal, setShowTableModal] = useState(false);
  console.log('showTableModal', showTableModal);
  const { t } = useTranslation();
  const { transactions } = useSelector(state => state.transactions);
  let transId = 0;

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showTableModal) {
        setShowTableModal(false);
      }
    },
    [setShowTableModal, showTableModal],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const handleClick = id => {
    console.log('handleClick _id', id);
    setShowTableModal(true);
  };

  const editRecord = id => {
    console.log('Edit record id:', id);
  };

  const deleteRecord = id => {
    console.log('Delete record id:', id);
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
              <button className={styles.firstBtn} onClick={editRecord}>
                EDIT
              </button>
              <button onClick={deleteRecord}>DELETE</button>
            </div>
          )}
        </>
      )}
    </>
  );
};
