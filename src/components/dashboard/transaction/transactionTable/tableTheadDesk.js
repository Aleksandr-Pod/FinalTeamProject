import styles from './TransactionTable.module.css';
import { TransactionTableDesk } from './transactionTableDesk';
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
export const TableTheadDesk = () => {
  return (
    <>
      <table className={styles.transactionTable}>
        <thead>
          <tr className={styles.headString}>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, date, type, category, comment, sum, balance }) => (
            <TransactionTableDesk
              key={id}
              date={date}
              type={type}
              category={category}
              comment={comment}
              sum={sum}
              balance={balance}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
