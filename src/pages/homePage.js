import { Fragment } from 'react';
import Media from 'react-media';
// components
import { Transaction } from '../components/dashboard/transaction/transaction';
import { NavMenu } from '../components/dashboard/navMenu/navMenu';
import { Currency } from '../components/dashboard/currency/currency';

//
const data = [
  {
    id: 'hfjhagsdhjfg',
    date: '04.01.19',
    type: '-',
    category: 'Other',
    comment: 'Gift for your wife',
    sum: '300.00',
    balance: '6900.00',
  },
];
//

export const HomePage = () => {
  console.log('HomePage');
  return (
    <>
      <h3>HomePage</h3>
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
                <NavMenu />
                <p>BALLANCE</p>
                <Transaction data={data} />
              </>
            )}
            {matches.medium && (
              <>
                <p>medium</p>
                <NavMenu />
                <p>BALLANCE</p>
                <Transaction />
                <Currency />
              </>
            )}
            {matches.large && (
              <>
                <p>large</p>
                <NavMenu />
                <p>BALLANCE</p>
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
