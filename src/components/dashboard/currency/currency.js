import { useEffect, useState } from 'react';
import css from './currency.module.css';
import { getCurrency } from '../../../api/currencyAPI';
import { nanoid } from 'nanoid';

export const Currency = () => {
  const [currencies, setCurrencies] = useState(null);
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
        console.log(currenciesArray);
      });
    };
    getApi();
  }, []);
  return (
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
          currencies.map(({ id, ccy, buy, sale }) => (
            <tr key={id} className={css.currencyInfo}>
              <td>{ccy}</td>
              <td>{Number(buy).toFixed(2)}</td>
              <td>{Number(sale).toFixed(2)}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};