import s from "./ballance.module.css";
import { useSelector } from 'react-redux';

export const Ballance = () => {
    const {data} = useSelector(state => state.auth)
    return (
        <div className={s.box}>
            <p className={s.title}>YOUR BALLANCE</p>
            <p className={s.value}> ₴ { data[0].amount}</p>
        </div>
    )
}