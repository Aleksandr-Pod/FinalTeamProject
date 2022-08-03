import { useEffect } from 'react';
import css from './currency.module.css';
import propTypes from 'prop-types';
import { getCurrency } from '../../../api/currencyAPI';
import { useSelector, useDispatch } from 'react-redux';
import { addCurrencies, addQueryDate } from '../../../redux/curerncySlice';

export const Currency = () => {
  const { currencies, queryDate } = useSelector(state => state.currency);
  const dispatch = useDispatch();
  const currentTime = new Date().getTime();

  useEffect(() => {
    if ((currencies.length !== 0) & (currentTime - queryDate < 60 * 60 * 3000))
      return;
    console.log('Currency request ...');
    (async () => {
      await getCurrency().then(data => {
        const currenciesArray = [];
        data.map(({ ccy, buy, sale }) =>
          currenciesArray.push({ ccy, buy, sale }),
        );
        dispatch(addCurrencies(currenciesArray));
        dispatch(addQueryDate(currentTime));
      });
    })();
  }, [currencies.length, currentTime, dispatch, queryDate]);

  return (
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
