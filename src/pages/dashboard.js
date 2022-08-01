import Header from '../components/dashboard/header/header';
import { useParams } from 'react-router-dom';
import { HomePage } from './homePage';
import { CurrencyPage } from './currencyPage';
import { StatPage } from './statPage';
import { PageNotFound } from '../components/pageNotFound/pageNotFound';
import styles from './styles.module.css';

export const Dashboard = () => {
  console.log('Dashboard');
  const { activeBtn } = useParams();

  if (
    (activeBtn !== 'home') &
    (activeBtn !== 'currency') &
    (activeBtn !== 'diagram')
  )
  return <PageNotFound path="/home" />;
  return (
    <div className={styles.dash}>
      <Header />
      {activeBtn === 'home' && <HomePage />}
      {activeBtn === 'currency' && <CurrencyPage />}
      {activeBtn === 'diagram' && <StatPage />}

    </div>
  );
};
