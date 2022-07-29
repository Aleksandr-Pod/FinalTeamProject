import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { NavMenu } from './navMenu';

export const Dashboard = () => {
  console.log('Dashboard');
  return (
    <>
      <Header />
      <hr />
      <NavMenu />
      <Outlet />
    </>
  );
};
