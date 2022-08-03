import { Fragment } from 'react';
import Media from 'react-media';
// components
import { Transaction } from '../components/dashboard/transaction/transaction';
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
          small: '(max-width: 768px)',
          medium: '(min-width: 769px) and (max-width: 1280px)',
          large: '(min-width: 1281px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.small && (
              <>
                <p>Small</p>
                <NavMenuMobile />
                <Ballance />
                <Transaction />
              </>
            )}
            {matches.medium && (
              <>
                <p>medium</p>
                <div className={styles.currency}>
                  <div className={styles.nav_ballance}>
                    <NavMenu />
                    <Ballance />
                  </div>
                  <Currency />
                </div>
                <Transaction />
                
              </>
            )}
            {matches.large && (
              <>
                <p>large</p>
                <NavMenu />
                <Ballance />
                <Transaction />
                <Currency />
              </>
            )}
          </Fragment>
        )}
      </Media>
    </>
  );
};
