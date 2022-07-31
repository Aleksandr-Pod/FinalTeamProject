import { Fragment } from 'react';
import Media from 'react-media';
import { TransactionTable } from '../components/dashboard/transactionTable/transactionTable';
import { NavMenu } from '../components/dashboard/navMenu/navMenu';

export const CurrencyPage = () => {
  return (
    <>
    <h3>CurrencyPage</h3>
    <Media queries = {{
        small: "(max-width: 768px)",
        medium: "(min-width: 769px) and (max-width: 1280px)",
        large: "(min-width: 1281px)"
      }}>
        {matches => (
          <Fragment>
            {matches.small && (
              <><p>Small</p>
                <NavMenu />
                <p>CurrencyTable</p>
              </>
            )}
            {matches.medium && (
              <>
                <p>medium</p>
                <NavMenu />
                <p>BALLANCE</p>
                <p>STAT Table</p>
                <p>CurrencyTable</p>
              </>
            )}
            {matches.large && (
              <>
                <p>large</p>
                <NavMenu />
                <p>BALLANCE</p>
                <p>STAT Table</p>
                <p>CurrencyTable</p>
              </>
            )}
          </Fragment>
        )}
      </Media>
      </>
  );
};
