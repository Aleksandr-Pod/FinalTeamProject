import EllipsisText from 'react-ellipsis-text/lib/components/EllipsisText';
import styles from './TransactionTable.module.css';
export const TransactionTableDesk = ({
  date,
  type,
  category,
  comment,
  sum,
  balance,
}) => {
  return (
    <>
      <tr className={styles.bodyString}>
        <td> {date} </td>
        <td>{type}</td>
        <td>{category}</td>
        <td>
          <EllipsisText text={comment} length={'20'} />
        </td>
        <td className={`${type === '-' ? styles.expensSum : styles.incomeSum}`}>
          {sum}{' '}
        </td>
        <td>{balance} </td>
      </tr>
    </>
  );
};
