import EllipsisText from 'react-ellipsis-text';
import styles from './TransactionTable.module.css';
const data = [
  {
    id: 'hfjhagsdhjfg',
    date: '04.01.19',
    type: '-',
    category: 'Other',
    comment: 'Gift for your wife',
    sum: '300.00',
    balance: '6900.00',
  },
  {
    id: 'asdfasdfewef',
    date: '04.01.19',
    type: '+',
    category: 'Other',
    comment: 'Gift for your wife',
    sum: '300.00',
    balance: '6900.00',
  },
];
export const TransactionTableMobile = () => {
  return (
    <>
      {data.map(({ id, date, type, category, comment, sum, balance }) => (
        <table
          key={id}
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
      ))}
    </>
  );
};
