import { Fragment } from 'react';
import Media from 'react-media';
// components
import { NavMenu } from '../components/dashboard/navMenu/navMenu';
import { Diagram } from '../components/diagram/diagram';
import { Period } from '../components/period/period';
import { StatTable } from '../components/statTable/statTable';
import styles from './styles.module.css';

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
              <>              
                <NavMenu />
                <h3 className={styles.stat}>Statistics</h3>
                <Diagram /> 
                <Period />
                <StatTable/>
              </>
            )}
            {matches.medium && (
              <>
                <p>medium</p>
                <NavMenu />
                <h3 className={styles.stat}>Statistics</h3>
                <Diagram/>
                <p>BALLANCE</p>
                <p>CurrencyTable</p>
                <p>STAT Table</p>
              </>
            )}
            {matches.large && (
              <>
                <p>large</p>
                <NavMenu />
                <h3 className={styles.stat}>Statistics</h3>
                <Diagram/>
                <p>BALLANCE</p>
                <p>CurrencyTable</p>
                <p>STAT Table</p>
              </>)}
          </Fragment>
        )}
      </Media>
  )
};