import { Fragment } from 'react';
import Media from 'react-media';
// components
import { TransactionTable } from '../components/dashboard/transactionTable/transactionTable';
import { NavMenu } from '../components/dashboard/navMenu/navMenu';
import { Currency } from '../components/dashboard/currency/currency';

export const HomePage = () => {
  console.log('HomePage');
  return (
    <>
      <h3>HomePage</h3>
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
                <p>BALLANCE</p>
                <TransactionTable/>
              </>
            )}
            {matches.medium && (
              <>
                <p>medium</p>
                <NavMenu />
                <p>BALLANCE</p>
                <TransactionTable />
                <Currency/>
              </>
            )}
            {matches.large && (
              <>
              <p>large</p>
              <NavMenu />
                <p>BALLANCE</p>
                <TransactionTable />
                <Currency/>
              </>)}
          </Fragment>
        )}
      </Media>
    </>
  );
};
