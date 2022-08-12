import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import s from './ballance.module.css';

export const Ballance = () => {
  const { t } = useTranslation();

  const { totalBalance } = useSelector(state => state.transactions);

  return (
    <div className={s.box}>
      <p className={s.title}>{t('balanceYour')}</p>
      <p className={s.value}>
        {' '}
        ₴ {totalBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
      </p>
    </div>
  );
};
