import { Fragment } from 'react';
import Media from 'react-media';
// components
import { NavMenu } from '../components/dashboard/navMenu/navMenu';
import styles from './styles.module.css';

export const StatPage = () => {
  return (
    <>
      <h3 className={styles.stat}>Statistics</h3>
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
                <p>STAT PAGE</p>
              </>
            )}
            {matches.medium && (
              <>
                <p>medium</p>
                <NavMenu />
                <p>BALLANCE</p>
                <p>CurrencyTable</p>
                <p>STAT Table</p>
              </>
            )}
            {matches.large && (
              <>
                <p>large</p>
                <NavMenu />
                <p>BALLANCE</p>
                <p>CurrencyTable</p>
                <p>STAT Table</p>
              </>)}
          </Fragment>
        )}
      </Media>
    </>
  )
};