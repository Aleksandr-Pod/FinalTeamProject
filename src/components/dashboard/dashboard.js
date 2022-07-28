import { Outlet } from 'react-router-dom';
import { Header } from './header';

export const Dashboard = () => {
  return (
    <>
      <Header />
      <hr />
      <Outlet />
    </>
  );
};
