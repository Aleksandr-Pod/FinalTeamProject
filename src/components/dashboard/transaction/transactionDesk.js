// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './TransactionDesk.module.css';
import { TransactionTableDesk } from './transactionTableDesk';
// const data = [
//   {
//     id: 'hfjhagsdhjfg',
//     date: '04.01.19',
//     type: '-',
//     category: 'Other',
//     comment: 'Gift for your wife',
//     sum: '300.00',
//     balance: '6900.00',
//   },
//   {
//     id: 'asdfasdfewef',
//     date: '04.01.19',
//     type: '+',
//     category: 'Other',
//     comment: 'Gift for your wife',
//     sum: '300.00',
//     balance: '6900.00',
//   },
// ];
// const initialState = [];
export const TransactionDesk = () => {
  // const [transaction, setTransaction] = useState(initialState);

  const { transactions } = useSelector(state => state.transactions);

  // useEffect(() => {
  //   if (transactions.length === 0) {
  //     return;
  //   }

  //   setTransaction(transactions);
  // }, [transactions, transactions.length]);

  const numberWithSpaces = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  // console.log(numberWithSpaces('100000000'));
  return (
    <>
      {transactions.length === 0 && (
        <>
          <h3 className={styles.noTransactions}>no transactions</h3>
        </>
      )}
      {transactions.length > 0 && (
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
              {transactions.map(
                ({ id, date, type, category, comment, sum, balance }) => (
                  <TransactionTableDesk
                    key={id}
                    date={date}
                    type={type}
                    category={category}
                    comment={comment}
                    sum={sum}
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
