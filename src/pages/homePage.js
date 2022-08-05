import { Fragment } from 'react';
import Media from 'react-media';
// components
import {
  TransactionTableMobile,
  TransactionDesk,
} from '../components/dashboard/transaction/';
import { NavMenuMobile } from '../components/dashboard/navMenu/navMenuMobile';
import { NavMenu } from '../components/dashboard/navMenu/navMenu';
import { Currency } from '../components/dashboard/currency/currency';
import { Ballance } from '../components/dashboard/ballance/ballance';
import styles from './homePage.module.css';

export const HomePage = () => {
  console.log('HomePage');

  return (
    <>
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px) and (max-width: 1279px)',
          large: '(min-width: 1280px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.small && (
              <>
                {/* <p>Small</p> */}
                <NavMenuMobile />
                <Ballance />
                <div className={styles.containerTable}>
                  <TransactionTableMobile />
                </div>
              </>
            )}
            {matches.medium && (
              <>
                {/* <p>medium</p> */}
                <div className={styles.currency}>
                  <div className={styles.nav_ballance}>
                    <NavMenu />
                    <Ballance />
                  </div>
                  <Currency />
                </div>
                <div className={styles.containerTable}>
                  <TransactionDesk />
                </div>
              </>
            )}
            {matches.large && (
              <>
                <div className={styles.largeSize}>
                  {/* <p>large</p> */}
                  <div className={styles.leftSize}>
                    <NavMenu />
                    <Ballance />
                    <Currency />
                  </div>
                  <div className={styles.rightSize}>
                    <div className={styles.containerTable}>
                      <TransactionDesk />
                    </div>
                  </div>
                </div>
              </>
            )}
          </Fragment>
        )}
      </Media>
    </>
  );
};
