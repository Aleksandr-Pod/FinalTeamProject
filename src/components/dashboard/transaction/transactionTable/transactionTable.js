import EllipsisText from 'react-ellipsis-text';

import styles from './TransactionTable.module.css';
export const TransactionTable = ({
  date,
  type,
  category,
  comment,
  sum,
  balance,
}) => {
  return (
    <>
      <table
        className={`${styles.transactionTable} ${
          type === '-' ? styles.expens : styles.income
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
            <td>{type}</td>
            <td>{category}</td>
            <td>
              <EllipsisText text={comment} length={'16'} />
            </td>
            <td
              className={`${
                type === '-' ? styles.expensSum : styles.incomeSum
              }`}
            >
              {sum}{' '}
            </td>
            <td>{balance} </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};