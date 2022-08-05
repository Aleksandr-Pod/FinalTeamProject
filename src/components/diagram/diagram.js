import { Chart, Tooltip, Title, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from './diagram.module.css';
import { useSelector } from 'react-redux';
Chart.register(Tooltip, Title, ArcElement);

export const Diagram = () => {
  const data = {
    datasets: [
      {
        data: [],
        backgroundColor: [],
        borderColor: [],
        cutout: 100,
      },
    ],
    labels: [],
  };

  const { statistics } = useSelector(state => state.statistics);
  const { totalBalance } = useSelector(state => state.transactions);
  statistics.result.forEach(el => {
    data.labels.push(el._id.category);
    data.datasets[0].data.push(el.totalSum);
    data.datasets[0].borderColor.push(el._id.colorCategory);
    data.datasets[0].backgroundColor.push(el._id.colorCategory);
  });

  return (
    <div className={styles.wrapper}>
      {statistics?.result?.length > 0 ? (
        <div>
          <p className={styles.balance}>₴ {totalBalance}</p>
          <Doughnut data={data} />
        </div>
      ) : (
        <p className={styles.text}>
          There are no expence transactions for this period
        </p>
      )}
    </div>
  );
};
