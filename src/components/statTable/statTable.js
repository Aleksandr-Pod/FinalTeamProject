import styles from './statTable.module.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const StatTable = () => {
  const data = [];
  const { statistics } = useSelector(state => state.statistics);
  statistics?.result?.map(el => {
    data.push({
      id: el._id.category,
      sum: el.totalSum,
      backgroundColor: el._id.colorCategory,
      category: el._id.category,
    });
  });

  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr className={styles.tr}>
          <th>Category</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, sum, backgroundColor, category }) => (
          <tr key={id} className={styles.row}>
            <td className={styles.category}>
              <div
                className={styles.square}
                style={{ background: backgroundColor }}
              ></div>
              <p className={styles.text}>{category}</p>
            </td>
            <td className={styles.sum}>{sum}</td>
          </tr>
        ))}
        <tr className={styles.data}>
          <td className={styles.title}>Expenses:</td>
          <td className={styles.expenses}>{statistics?.totalExpense}</td>
        </tr>
        <tr className={styles.data}>
          <td className={styles.title}>Income:</td>
          <td className={styles.income}>{statistics?.totalIncome}</td>
        </tr>
      </tbody>
    </table>
  );
};
