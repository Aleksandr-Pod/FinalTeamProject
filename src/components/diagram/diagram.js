import { Chart, Tooltip, Title, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from './diagram.module.css';
import { useSelector } from 'react-redux';
import { Spinner } from '../spinner/spinner';

Chart.register(Tooltip, Title, ArcElement);

export const Diagram = () => {
  const { statistics, isLoading } = useSelector(state => state.statistics);

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

  statistics.result.forEach(el => {
    data.labels.push(el._id.category);
    data.datasets[0].data.push(el.totalSum);
    data.datasets[0].borderColor.push(el._id.colorCategory);
    data.datasets[0].backgroundColor.push(el._id.colorCategory);
  });
  return (
    <div className={styles.wrapper}>
      {statistics?.result?.length > 0 ? (
        isLoading ? (
          <Spinner />
        ) : (
          <div>
            <p className={styles.balance}>
              ₴{' '}
              {statistics?.totalExpense
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
            </p>
            <Doughnut data={data} />
          </div>
        )
      ) : (
        !isLoading && (
          <p className={styles.text}>
            There are no expence transactions for this period
          </p>
        )
      )}
    </div>
  );
};
