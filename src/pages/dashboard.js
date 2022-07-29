import { Header } from '../components/dashboard/header';
import { NavMenu } from '../components/dashboard//navMenu';
import styles from './styles.module.css';
import { useParams } from 'react-router-dom';
import { Home } from '../components/dashboard/home';
import { Currency } from '../components/dashboard/currency';
import { Stat } from '../components/dashboard/stat';

export const Dashboard = () => {
  console.log('Dashboard');
  const { activeBtn } = useParams();
  console.log('activeBtn', activeBtn);
  return (
    <div className={styles.dash}>
      <Header />
      <hr />
      <NavMenu />
      {activeBtn === 'home' && <Home />}
      {activeBtn === 'currency' && <Currency />}
      {activeBtn === 'diagram' && <Stat />}
    </div>
  );
};
