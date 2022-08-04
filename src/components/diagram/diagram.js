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
  const { balance } = useSelector(state => state.auth.user);

  statistics?.result?.map(el => {
    data.labels.push(el._id.category);
    data.datasets[0].data.push(el.totalSum);
    data.datasets[0].borderColor.push(el._id.colorCategory);
    data.datasets[0].backgroundColor.push(el._id.colorCategory);
  });

  return (
    <div className={styles.wrapper}>
      <p className={styles.balance}>₴ {balance}</p>
      {statistics?.result?.length > 0 ? (
        <Doughnut data={data} />
      ) : (
        <p>There are no transactions for this period</p>
      )}
    </div>
  );
};
