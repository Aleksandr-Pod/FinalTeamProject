import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Fragment } from 'react';
import Media from 'react-media';
import s from './transaction.module.css';
import styles from './transactionTable/TransactionTable.module.css';
import {
  TransactionTableDesk,
  TransactionTableMobile,
  TableTheadDesk,
} from './transactionTable';
const screenWidth = window.screen.width;
export const Transaction = ({ data }) => {
  const mobileView = screenWidth < 426;
  return (
    <>
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px) and (max-width: 1280px)',
          large: '(min-width: 1281px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.small && (
              <div className={s.container}>
                <TransactionTableMobile />
              </div>
            )}
            {matches.medium && (
              <div className={s.container}>
                <TableTheadDesk />
              </div>
            )}
            {matches.large && (
              <div className={s.container}>
                <TableTheadDesk />
              </div>
            )}
          </Fragment>
        )}
      </Media>
      <div className={s.container}></div>
    </>
  );
};
//  {
//    mobileView ? (
//      data.map(({ id, date, type, category, comment, sum, balance }) => (
//        <>
//          <TransactionTableMobile
//            key={id}
//            date={date}
//            type={type}
//            category={category}
//            comment={comment}
//            sum={sum}
//            balance={balance}
//          />
//        </>
//      ))
//    ) : (
//      <TableTheadDesk>
//        {data.map(({ id, date, type, category, comment, sum, balance }) => (
//          <TransactionTableDesk
//            key={id}
//            date={date}
//            type={type}
//            category={category}
//            comment={comment}
//            sum={sum}
//            balance={balance}
//          />
//        ))}
//      </TableTheadDesk>
//    );
//  }
