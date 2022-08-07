import styles from './statTable.module.css';
import { useSelector } from 'react-redux';

export const StatTable = () => {
  const { statistics, isLoading } = useSelector(state => state.statistics);
  const { totalBalance } = useSelector(state => state.transactions);

  const data = statistics.result.map(el => ({
    ...el,
    id: el._id.category,
    sum: el.totalSum,
    backgroundColor: el._id.colorCategory,
    category: el._id.category,
  }));

  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr className={styles.tr}>
          <th>Category</th>
          <th>Sum</th>
        </tr>
      </thead>
      {!isLoading && (
        <>
          <tbody>
            {data
              .sort((a, b) => a.sum - b.sum)
              .map(({ id, sum, backgroundColor, category }) => (
                <tr key={id} className={styles.row}>
                  <td className={styles.category}>
                    <div
                      className={styles.square}
                      style={{ background: backgroundColor }}
                    ></div>
                    <p className={styles.text}>{category}</p>
                  </td>
                  <td className={styles.sum}>
                    {sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                  </td>
                </tr>
              ))
            }
            <tr className={styles.data}>
              <td className={styles.title}>Expenses:</td>
              <td className={styles.expenses}>
                {statistics?.totalExpense
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
              </td>
            </tr>
            <tr className={`${styles.data} ${styles.rowIncome}`}>
              <td className={styles.title}>Income:</td>
              <td className={styles.income}>
                {statistics?.totalIncome
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
              </td>
            </tr>
            <tr className={styles.ballance}>
              <td className={styles.title}>Ballance:</td>
              <td className={styles.ballanceTotal}>
                {totalBalance
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
              </td>
            </tr>
          </tbody>
        </>
      )}
    </table>
  );
};
