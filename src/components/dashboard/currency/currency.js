import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ThreeDots } from 'react-loader-spinner';
import { getCurrency } from '../../../api/currencyAPI';
import { useSelector, useDispatch } from 'react-redux';
import { addCurrencies, addQueryDate } from '../../../redux/curerncySlice';
import css from './currency.module.css';

export const Currency = () => {
  const { t } = useTranslation();

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
              <th>{t('carency.carency')}</th>
              <th>{t('carency.purchase')}</th>
              <th>{t('carency.sale')}</th>
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
