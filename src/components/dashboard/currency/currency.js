import { useEffect, useState } from 'react';
import css from './currency.module.css';
import propTypes from 'prop-types';
import { getCurrency } from '../../../api/currencyAPI';
import { useSelector, useDispatch } from 'react-redux';
import { addCurrencies, addQueryDate } from '../../../redux/curerncySlice';
import { ThreeDots } from 'react-loader-spinner';

export const Currency = () => {
  const { currencies, queryDate } = useSelector(state => state.currency);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const currentTime = new Date().getTime();

  useEffect(() => {
    if ((currencies.length !== 0) & (currentTime - queryDate < 60 * 60 * 3000))
      return;
    if (isLoading === true) return;
    (async () => {
      setIsLoading(true);
      await getCurrency().then(data => {
        const currenciesArray = [];
        data.map(({ ccy, buy, sale }) =>
          currenciesArray.push({ ccy, buy, sale }),
        );
        dispatch(addCurrencies(currenciesArray));
        dispatch(addQueryDate(currentTime));
        setIsLoading(false);
      });
    })();
  });

  return (
    <>
      {isLoading ? (
        <ThreeDots
          height="60"
          width="60"
          radius="9"
          color="var(--violet)"
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            position: 'fixed',
            top: '50%',
            left: '45%',
          }}
          visible={true}
        />
      ) : (
        <table className={css.currency}>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Purchase</th>
              <th>Sale</th>
            </tr>
          </thead>
          <tbody>
            {currencies &&
              currencies.map(({ ccy, buy, sale }, idx) => (
                <tr key={idx}>
                  <td>{ccy}</td>
                  <td>{Number(buy).toFixed(2)}</td>
                  <td>{Number(sale).toFixed(2)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
};

Currency.prototype = {
  currencies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      ccy: propTypes.string,
      buy: propTypes.string,
      sale: propTypes.number,
    }),
  ).isRequired,
};
