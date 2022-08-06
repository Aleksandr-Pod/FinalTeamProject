import { lazy } from 'react';
import { useParams } from 'react-router-dom';
// components
import { HomePage } from './homePage';
import { CurrencyPage } from './currencyPage';
import { StatPage } from './statPage';
import PageNotFound from './pageNotFound';
import Header from '../components/dashboard/header/header';
import PurpleEllipse from '../images/Ellipse1.svg';
import PeachEllipse from '../images/Ellipse2.svg';
import styles from './styles.module.css';
import Modal from '../components/modal/modal';

//          не удалять !
//          после переименования файлов снять коммент.
// const HomePage = lazy(() => import('./homePage'));
// const CurrencyPage = lazy(() => import('./currencyPage'));
// const StatPage = lazy(() => import ('./statPage'));
// const PageNotFound = lazy(() => import('./pageNotFound'));

const Dashboard = () => {
  console.log('Dashboard');

  const { activeBtn } = useParams();

  if (
    (activeBtn !== 'home') &
    (activeBtn !== 'currency') &
    (activeBtn !== 'diagram')
  )
    return <PageNotFound path="/home" />;
  return (
    <>
      {/* <div className={styles.vector}></div> */}
      <img className={styles.purple} src={PurpleEllipse} alt="logo" />
      <img className={styles.peach} src={PeachEllipse} alt="logo" />
      <div className={styles.dash}>
        <Header />
        <Modal />
        {activeBtn === 'home' && <HomePage />}
        {activeBtn === 'currency' && <CurrencyPage />}
        {activeBtn === 'diagram' && <StatPage />}
      </div>
      <Modal />
    </>
  );
};
export default Dashboard;
