import { useEffect, useState } from 'react';
import css from './currency.module.css';
import propTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { getCurrency } from '../../../api/currencyAPI';

export const Currency = () => {
  const [currencies, setCurrencies] = useState([]);

  const time = 60 * 60 * 3000;
  const currentTime = new Date().getTime();

  useEffect(() => {
    const getApi = async () => {
      await getCurrency().then(data => {
        const currenciesArray = [];
        data.map(({ ccy, buy, sale }) => {
          const currenc = {
            id: nanoid(),
            ccy,
            buy,
            sale,
          };
          return currenciesArray.push(currenc);
        });
        setCurrencies(currenciesArray);
        localStorage.setItem(
          'currency',
          JSON.stringify({
            currentTime: currentTime,
            currencies: currenciesArray,
          }),
        );
      });
    };
    getApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (localStorage.getItem('currency') !== null) {
      const deadline =
        JSON.parse(localStorage.getItem('currency')).currentTime + time;
      const endOfDeadline = deadline - time;
      if (endOfDeadline < 0) {
        getCurrency();
      } else {
        const oldData = JSON.parse(localStorage.getItem('currency')).currencies;
        setCurrencies(oldData);
      }
    } else {
      getCurrency();
      localStorage.setItem('currency', JSON.stringify(currencies));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
