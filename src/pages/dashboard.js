import { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/dashboard/header/header';
import PurpleEllipse from '../images/Ellipse1.svg';
import PeachEllipse from '../images/Ellipse2.svg';
import Modal from '../components/modal/modal';
import Footer from '../components/footer/footer';
import { Spinner } from '../components/spinner/spinner';
import styles from './styles.module.css';

const HomePage = lazy(() => import('./homePage'));
const CurrencyPage = lazy(() => import('./currencyPage'));
const StatPage = lazy(() => import('./statPage'));
const PageNotFound = lazy(() => import('./pageNotFound'));

const Dashboard = () => {
  const { showModal } = useSelector(state => state.transactions);
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
      <img className={styles.purple} src={PurpleEllipse} alt="logo" />
      <img className={styles.peach} src={PeachEllipse} alt="logo" />
      <div className={`${styles.dash}  ${showModal ? styles.offScroll : ''}`}>
        <Header />
        {activeBtn === 'home' && (
          <>
            <Suspense fallback={<Spinner />}>
              <HomePage />
            </Suspense>
            <Modal />
          </>
        )}
        {activeBtn === 'diagram' && (
          <>
            <Suspense fallback={<Spinner />}>
              <StatPage />
            </Suspense>
            <Modal />
          </>
        )}
        {activeBtn === 'currency' && (
          <Suspense fallback={<Spinner />}>
            <CurrencyPage />
          </Suspense>
        )}

        <Footer />
      </div>
    </>
  );
};
export default Dashboard;
