import EllipsisText from 'react-ellipsis-text/lib/components/EllipsisText';
import { useSelector } from 'react-redux';
import styles from './transactionDesk.module.css';

export const TransactionTableDesk = ({
  handleClick,
  id,
  date,
  isIncome,
  category,
  comment,
  sum,
  balance,
}) => {
  const { currentId } = useSelector(state => state.transactions);

  return (
    <tr
      className={`${styles.bodyString} ${
        styles[id === currentId && 'selected']
      }`}
      onClick={() => handleClick(id)}
    >
      <td className={styles.date}> {date} </td>
      <td>{isIncome ? '+' : '-'}</td>
      <td className={styles.category}>{category}</td>
      <td className={styles.comment}>
        <EllipsisText text={comment} length={20} />
      </td>
      <td className={`${isIncome ? styles.incomeSum : styles.expensSum}`}>
        {sum}{' '}
      </td>
      <td className={styles.balance}>{balance} </td>
    </tr>
  );
};
