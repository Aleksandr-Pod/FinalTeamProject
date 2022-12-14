import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import EllipsisText from 'react-ellipsis-text';
import styles from './transactionMobile.module.css';

export const TransactionTableMobile = () => {
  const { t } = useTranslation();

  const { transactions } = useSelector(state => state.transactions);

  return (
    <>
      {transactions.length === 0 && (
        <>
          <p className={styles.transactionsText}>
            You haven't made any transactions yet
          </p>
        </>
      )}
      {transactions.length > 0 &&
        transactions.map(
          ({ _id, date, isIncome, category, comment, amount, balance }) => (
            <table
              key={_id}
              className={`${styles.transactionTable} ${
                isIncome ? styles.income : styles.expens
              }`}
            >
              <thead className={styles.tableHead}>
                <tr>
                  <th>{t('transactions.date')}</th>
                  <th>{t('transactions.type')}</th>
                  <th>{t('transactions.category')}</th>
                  <th>{t('transactions.comment')}</th>
                  <th>{t('transactions.sum')}</th>
                  <th>{t('transactions.balance')}</th>
                </tr>
              </thead>
              <tbody className={styles.tbody}>
                <tr>
                  <td> {date} </td>
                  <td>{isIncome ? '+' : '-'}</td>
                  <td>{category}</td>
                  <td>
                    <EllipsisText text={comment} length={16} />
                  </td>
                  <td
                    className={`${
                      isIncome ? styles.incomeSum : styles.expensSum
                    }`}
                  >
                    {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
                  </td>
                  <td>
                    {balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
                  </td>
                </tr>
              </tbody>
            </table>
          ),
        )}
    </>
  );
};
