import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// import { ThreeDots } from 'react-loader-spinner';
import { getCurrency } from '../../../redux/currency/currencyOperations';
import { useSelector, useDispatch } from 'react-redux';
import css from './currency.module.css';

export const Currency = () => {
  const { t } = useTranslation();
  const { currencies, queryDate } = useSelector(state => state.currency);
  const currentDate = Date.now();
  const dispatch = useDispatch;

  useEffect(() => {
    if ((currencies.length !== 0) & (currentDate - queryDate < 60 * 60 * 3000))
      return;
    dispatch(getCurrency());
  }, [dispatch, currencies.length, currentDate, queryDate]);

  return (
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
  );
};
