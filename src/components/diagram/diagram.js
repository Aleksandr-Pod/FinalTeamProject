import { Chart, Tooltip, Title, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from './diagram.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchStatistics } from '../../redux/statistics/statisticsOperations';
import { addStatistics } from '../../redux/statistics/statisticsSlice';
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatistics({ month: '8', year: '2022' })).then(response => {
      const resp = response.payload;
      dispatch(addStatistics(resp));
    });
  }, []);

  statistics?.result?.map(el => {
    data.labels.push(el._id.category);
    data.datasets[0].data.push(el.totalSum);
    data.datasets[0].borderColor.push(el._id.colorCategory);
    data.datasets[0].backgroundColor.push(el._id.colorCategory);
  });

  return (
    <div className={styles.wrapper}>
      <p className={styles.balance}>₴ {balance}</p>
      <Doughnut data={data} />
    </div>
  );
};
