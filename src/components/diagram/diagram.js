import { Chart, Tooltip, Title, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import styles from './diagram.module.css';
import { useSelector } from 'react-redux';
import { Spinner } from '../spinner/spinner';

Chart.register(Tooltip, Title, ArcElement);

export const Diagram = () => {
  const { t } = useTranslation();
  const { statData, isLoading } = useSelector(state => state.statistics);

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

  statData?.result.forEach(el => {
    data.labels.push(el.category);
    data.datasets[0].data.push(el.totalSum);
    data.datasets[0].borderColor.push(el.catColor);
    data.datasets[0].backgroundColor.push(el.catColor);
  });
  return (
    <div className={styles.wrapper}>
      {statData?.result?.length > 0 ? (
        isLoading ? (
          <Spinner />
        ) : (
          <div>
            <p className={styles.balance}>
              ₴{' '}
              {statData?.totalExpense
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
            </p>
            <Doughnut data={data} />
          </div>
        )
      ) : (
        !isLoading && <p className={styles.text}>{t('diagram.text')}</p>
      )}
    </div>
  );
};
