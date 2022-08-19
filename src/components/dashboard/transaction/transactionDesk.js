import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styles from './transactionDesk.module.css';
import { TransactionTableDesk } from './transactionTableDesk';

export const TransactionDesk = () => {
  const { t } = useTranslation();
  const { transactions } = useSelector(state => state.transactions);
  return (
    <>
      {transactions.length === 0 && (
        <>
          <p className={styles.transactionsText}>{t('transactions.text')}</p>
        </>
      )}
      {transactions.length > 0 && (
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
      )}
    </>
  );
};
