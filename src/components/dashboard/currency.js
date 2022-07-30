import css from './currency.module.css';

export const Currency = ({ currencies }) => {
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
        {currencies.map(({ id, ccy, buy, sale }) => (
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
