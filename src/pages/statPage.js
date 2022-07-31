import { Fragment } from 'react';
import Media from 'react-media';
// components
import { NavMenu } from '../components/dashboard/navMenu/navMenu';
import { Diagram } from '../components/diagram/diagram.js';
import styles from './styles.module.css';

export const StatPage = () => {
  return (
      <Media queries = {{
        small: "(max-width: 768px)",
        medium: "(min-width: 769px) and (max-width: 1280px)",
        large: "(min-width: 1281px)"
      }}>
        {matches => (
          <Fragment>
            {matches.small && (
              <>
                <p>Small</p>
                <NavMenu />
                <h3 className={styles.stat}>Statistics</h3>
                <Diagram/>
                <p>STAT PAGE</p>
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