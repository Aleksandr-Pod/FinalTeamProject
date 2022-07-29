import { Header } from '../components/dashboard/header';
import { NavMenu } from '../components/dashboard//navMenu';
import styles from './styles.module.css';
import { useParams } from 'react-router-dom';
import { HomePage } from './homePage';
import { CurrencyPage } from './currencyPage';
import { StatPage } from './statPage';
import { PageNotFound } from '../components/pageNotFound/pageNotFound';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  console.log('Dashboard');
  const { activeBtn } = useParams();
  console.log('activeBtn', activeBtn);
  if (
    (activeBtn !== 'home') &
    (activeBtn !== 'currency') &
    (activeBtn !== 'diagram')
  )
    return <PageNotFound />;
  return (
    <div className={styles.dash}>
      <Header />
      <hr />
      <NavMenu />
      {activeBtn === 'home' && <HomePage />}
      {activeBtn === 'currency' && <CurrencyPage />}
      {activeBtn === 'diagram' && <StatPage />}
      {/* <Link to="/home">Go back to your page</Link> */}
    </div>
  );
};
