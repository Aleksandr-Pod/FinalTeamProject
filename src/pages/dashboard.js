import { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
// components
import Header from '../components/dashboard/header/header';
import PurpleEllipse from '../images/Ellipse1.svg';
import PeachEllipse from '../images/Ellipse2.svg';
import styles from './styles.module.css';
import Modal from '../components/modal/modal';
import { Spinner } from '../components/spinner/spinner';

const HomePage = lazy(() => import('./homePage'));
const CurrencyPage = lazy(() => import('./currencyPage'));
const StatPage = lazy(() => import('./statPage'));
const PageNotFound = lazy(() => import('./pageNotFound'));

const Dashboard = () => {
  console.log('Dashboard');

  const { activeBtn } = useParams();

  if (
    (activeBtn !== 'home') &
    (activeBtn !== 'currency') &
    (activeBtn !== 'diagram')
  )
    return (
      <Suspense>
        <PageNotFound path="/home" />
      </Suspense>
    );
  return (
    <>
      {/* <div className={styles.vector}></div> */}
      <img className={styles.purple} src={PurpleEllipse} alt="logo" />
      <img className={styles.peach} src={PeachEllipse} alt="logo" />
      <div className={styles.dash}>
        <Header />
        <Modal />
        {activeBtn === 'home' && (
          <Suspense fallback={<Spinner />}>
            <HomePage />
          </Suspense>
        )}
        {activeBtn === 'currency' && (
          <Suspense fallback={<Spinner />}>
            <CurrencyPage />
          </Suspense>
        )}
        {activeBtn === 'diagram' && (
          <Suspense fallback={<Spinner />}>
            <StatPage />
          </Suspense>
        )}
      </div>
      <Modal />
    </>
  );
};
export default Dashboard;
