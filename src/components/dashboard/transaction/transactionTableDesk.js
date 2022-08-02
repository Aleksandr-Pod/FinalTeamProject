import EllipsisText from 'react-ellipsis-text/lib/components/EllipsisText';
import styles from './TransactionDesk.module.css';
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
        <td className={styles.date}> {date} </td>
        <td>{type}</td>
        <td className={styles.category}>{category}</td>
        <td className={styles.comment}>
          <EllipsisText text={comment} length={20} />
        </td>
        <td className={`${type === '-' ? styles.expensSum : styles.incomeSum}`}>
          {sum}{' '}
        </td>
        <td className={styles.balance}>{balance} </td>
      </tr>
    </>
  );
};
