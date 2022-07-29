import { Header } from '../components/dashboard/header';
import { NavMenu } from '../components/dashboard//navMenu';
import styles from './styles.module.css';
import { useParams } from 'react-router-dom';
import { HomePage } from './homePage';
import { CurrencyPage } from './currencyPage';
import { StatPage } from './statPage';

export const Dashboard = () => {
  console.log('Dashboard');
  const { activeBtn } = useParams();
  console.log('activeBtn', activeBtn);
  return (
    <div className={styles.dash}>
      <Header />
      <hr />
      <NavMenu />
      {activeBtn === 'home' && <HomePage />}
      {activeBtn === 'currency' && <CurrencyPage />}
      {activeBtn === 'diagram' && <StatPage />}
    </div>
  );
};
