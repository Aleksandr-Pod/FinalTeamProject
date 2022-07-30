import styles from './TransactionTable.module.css';
export const TransactionTable = ({ data }) => {
  return (
    <>
      <div className={styles.container}>
        <table className={styles.transactionTable}>
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
              <td>Lorem </td>
              <td>Lorem </td>
              <td>Lorem </td>
              <td>Lorem </td>
              <td>Lorem </td>
              <td>Lorem </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
