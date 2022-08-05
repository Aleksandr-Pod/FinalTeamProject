import { Fragment } from 'react';
import Media from 'react-media';
// components
import { NavMenuMobile } from '../components/dashboard/navMenu/navMenuMobile';
import { NavMenu } from '../components/dashboard/navMenu/navMenu';
import { Ballance } from '../components/dashboard/ballance/ballance';
import { Currency } from '../components/dashboard/currency/currency';
import { Diagram } from '../components/diagram/diagram';
import { Period } from '../components/period/period';
import { StatTable } from '../components/statTable/statTable';
// import styles from './styles.module.css';
import styles from './statPage.module.css';

export const StatPage = () => {
  return (
      <Media queries = {{
        small: "(max-width: 767px)",
        medium: "(min-width: 768px) and (max-width: 1279px)",
        large: "(min-width: 1280px)"
      }}>
        {matches => (
          <Fragment>
            {matches.small && (
              <div className={styles.wrap}>              
                <NavMenuMobile />
                <h3 className={styles.stat}>Statistics</h3>
                <Diagram /> 
                <Period />
                <StatTable/>
              </div>
            )}
            {matches.medium && (
              <div className={styles.wrap}>
                <div>
                  <NavMenu />
                  <Ballance/>
                  <h3 className={styles.stat}>Statistics</h3>
                  <Diagram/>
                </div>
                <div className={styles.right}>
                  <Currency />
                  <Period />
                  <StatTable/>
                </div>          
              </div>
            )}
            {matches.large && (
              <div className={styles.wrap}>
                <div className={styles.left}>
                  <NavMenu />
                  <Ballance />
                  <Currency/>
                </div>
                <div className={styles.right}>
                  <h3 className={styles.stat}>Statistics</h3>
                  <div className={styles.chart}>
                    <Diagram/>
                    <div className={styles.table}>
                      <Period/>
                      <StatTable/>
                    </div>
                  </div>
                </div>
              </div>)}
          </Fragment>
        )}
      </Media>
  )
};