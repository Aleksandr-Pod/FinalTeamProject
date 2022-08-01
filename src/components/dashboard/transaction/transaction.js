import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import s from './transaction.module.css';
import { TransactionTable } from './transactionTable/transactionTable';

export const Transaction = ({ data }) => {
  return (
    <>
      <div className={s.container}>
        {data.map(({ id, date, type, category, comment, sum, balance }) => (
          <>
            <TransactionTable
              key={id}
              date={date}
              type={type}
              category={category}
              comment={comment}
              sum={sum}
              balance={balance}
            />
          </>
        ))}
      </div>
    </>
  );
};
