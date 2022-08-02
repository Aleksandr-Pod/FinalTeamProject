import { useEffect, useState } from 'react';
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
    if (currencies.length !== 0 & (currentTime-queryDate) < (60 * 60 * 3000))  return;
    console.log("Currency request ...");
    (async () => {
      await getCurrency().then(data => {
        const currenciesArray = [];
        data.map(({ ccy, buy, sale }) => currenciesArray.push({ccy, buy, sale}));
        dispatch(addCurrencies(currenciesArray));
        dispatch(addQueryDate(currentTime));
      });
    })()
  }, [currencies.length, currentTime, dispatch, queryDate]);

  // useEffect(() => {
  //   if (localStorage.getItem('currency') !== null) {
  //     const deadline =
  //       JSON.parse(localStorage.getItem('currency')).currentTime + time;
  //     const endOfDeadline = deadline - time;
  //     if (endOfDeadline < 0) {
  //       getCurrency();
  //     } else {
  //       const oldData = JSON.parse(localStorage.getItem('currency')).currencies;
  //       setCurrencies(oldData);
  //     }
  //   } else {
  //     getCurrency();
  //     localStorage.setItem('currency', JSON.stringify(currencies));
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
            currencies.map(({ ccy, buy, sale }, idx) => (
              <tr key={idx} className={css.currencyInfo}>
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
