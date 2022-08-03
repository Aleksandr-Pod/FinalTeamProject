// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import EllipsisText from 'react-ellipsis-text';
import styles from './TransactionMobile.module.css';
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
export const TransactionTableMobile = () => {
  // const [transaction, setTransaction] = useState(initialState);
  const { data: transactions } = useSelector(state => state.auth);

  // useEffect(() => {
  //   if (transactions.length === 0) {
  //     return;
  //   }

  //   setTransaction(transactions);
  // }, [transactions, transactions.length]);

  const numberWithSpaces = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };
  console.log(transactions[0].id)
  return (
    <>
      {transactions.length === 0 && (
        <>
          <h3 className={styles.noTransactions}>no transactions</h3>
        </>
      )}
      {transactions.length > 0 &&
        transactions.map(
          ({ id, date, type, category, comment, amount, balance }) => (
            <table key={id} className={`${styles.transactionTable} ${
                type === '-' ? styles.expens : styles.income
              }`}
            >
              <thead className={styles.tableHead}>
                <tr>
                  <th>Date</th>
                  <th>isIncome</th>
                  <th>Category</th>
                  <th>Comment</th>
                  <th>Amount</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> {date} </td>
                  <td>{type ? '+' : '-'}</td>
                  <td>{category}</td>
                  <td><EllipsisText text={comment} length={16} /></td>
                  <td className={`${type ? styles.incomeSum : styles.expensSum}`}>
                    {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
                  </td>
                  <td>{balance} </td>
                </tr>
              </tbody>
            </table>
          ),
        )}
    </>
  );
};
