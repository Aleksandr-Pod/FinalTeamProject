import { Fragment } from 'react';
import Media from 'react-media';
import { NavMenuMobile } from '../components/dashboard/navMenu/navMenuMobile';
import { NavMenu } from '../components/dashboard/navMenu/navMenu';
import { Currency } from '../components/dashboard/currency/currency';
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
                <NavMenuMobile />
                <Currency/>
              </>
            )}
            {matches.medium && (
              <>
                <p>medium</p>
                <NavMenu />
                <p>BALLANCE</p>
                <p>STAT Table</p>
                <Currency/>
              </>
            )}
            {matches.large && (
              <>
                <p>large</p>
                <NavMenu />
                <p>BALLANCE</p>
                <p>STAT Table</p>
                <Currency/>
              </>
            )}
          </Fragment>
        )}
      </Media>
      </>
  );
};
