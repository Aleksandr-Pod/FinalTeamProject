import { useEffect, useState } from 'react';
import { Currency } from '../components/dashboard/currency';
import { getCurrency } from '../components/dashboard/currencyAPI/currencyAPI';
import { nanoid } from 'nanoid';
import css from './currencyPage.module.css';

export const CurrencyPage = () => {
  const [currencies, setCurrencies] = useState(null);

  useEffect(() => {
    getCurrency().then(data => {
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
    });
  }, []);
  return (
    <div className={css.currencyContainer}>
      {currencies && <Currency currencies={currencies} />}
    </div>
  );
};
