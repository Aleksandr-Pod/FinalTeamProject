import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { NavMenu } from './navMenu';
import styles from './styles.module.css';

export const Dashboard = () => {
  console.log('Dashboard');
  return (
    <div className={styles.dash}>
      <Header />
      <hr />
      <NavMenu />
      <Outlet />
    </div>
  );
};
