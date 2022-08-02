import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './TransactionDesk.module.css';
import { TransactionTableDesk } from './transactionTableDesk';

const initialState = [];
export const TransactionDesk = () => {
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
      {transaction.length > 0 && (
        <>
          <table className={styles.transactionTable}>
            <thead>
              <tr className={styles.headString}>
                <th className={styles.headDate}>Date</th>
                <th>Type</th>
                <th className={styles.headCategory}>Category</th>
                <th className={styles.headComment}>Comment</th>
                <th className={styles.headSum}>Sum</th>
                <th className={styles.headBalance}>Balance</th>
              </tr>
            </thead>
            <tbody>
              {transaction.map(
                ({
                  id,
                  date,
                  isIncome,
                  category,
                  comment,
                  amount,
                  balance,
                }) => (
                  <TransactionTableDesk
                    key={id}
                    date={date}
                    isIncome={isIncome}
                    category={category}
                    comment={comment}
                    amount={amount}
                    balance={balance}
                  />
                ),
              )}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};
