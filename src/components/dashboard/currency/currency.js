import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './currency.module.css';
import propTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { getCurrency } from '../../../api/currencyAPI';
import { addCurrencies, addQueryDate } from '../../../redux/currecnySlice';

export const Currency = () => {
  const dispatch = useDispatch();
  const { currencies, queryDate } = useSelector(state => state.currencies);
  const time = 60 * 60 * 3000;
  const currentTime = new Date().getTime();

  useEffect(() => {
    if ((currencies.length !== 0) & (currentTime - queryDate < time)) return;
    // console.log('Currency request');
    const getApi = async () => {
      await getCurrency().then(data => {
        const currencyArray = [];
        data.map(({ ccy, buy, sale }) =>
          currencyArray.push({ ccy, buy, sale }),
        );

        dispatch(addCurrencies(currencyArray));
        dispatch(addQueryDate(currentTime));
      });
    };
    getApi();
  }, [currencies.length, currentTime, dispatch, queryDate, time]);

  return (
    <div className={css.currencyContainer}>
      <table className={css.currency}>
        <thead>
          <tr className={css.currencyHead}>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody className={css.currencyBody}>
          {currencies &&
            currencies.map(({ ccy, buy, sale }) => (
              <tr key={nanoid()} className={css.currencyInfo}>
                <td>{ccy}</td>
                <td>{Number(buy).toFixed(2)}</td>
                <td>{Number(sale).toFixed(2)}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className={css.vector}></div>
    </div>
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
