import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import EllipsisText from 'react-ellipsis-text';
import styles from './TransactionMobile.module.css';

const initialState = [];
export const TransactionTableMobile = () => {
  const [transaction, setTransaction] = useState(initialState);

  const { data } = useSelector(state => state.auth);

  useEffect(() => {
    if (data.length === 0) {
      return;
    }
    setTransaction(data);
  }, [data]);

  return (
    <>
      {transaction.length === 0 && (
        <>
          <h3 className={styles.noTransactions}>no transactions</h3>
        </>
      )}
      {transaction.length > 0 &&
        transaction.map(
          ({ id, date, isIncome, category, comment, amount, balance }) => (
            <table
              key={id}
              className={`${styles.transactionTable} ${
                isIncome ? styles.income : styles.expens
              }`}
            >
              <thead className={styles.tableHead}>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Category</th>
                  <th>Comment</th>
                  <th>Sum</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
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
