import s from './ballance.module.css';
import { useSelector } from 'react-redux';

export const Ballance = () => {
  const { user } = useSelector(state => state.auth);

  return (
    <div className={s.box}>
      <p className={s.title}>YOUR BALLANCE</p>
      <p className={s.value}> ₴ {user.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</p>
    </div>
  );
};
