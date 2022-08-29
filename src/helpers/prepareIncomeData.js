export const prepareIncomeData = data => {
  const result = data.allTransactions.sort(
    (a, b) =>
      Date.parse(`${a.date.slice(3, 5)} ${a.date.slice(0, 2)} 2022`) -
      Date.parse(`${b.date.slice(3, 5)} ${b.date.slice(0, 2)} 2022`),
  );
  // расчёт балланса для каждого элемента
  result.reduce(
    (acc, current) =>
      (current.balance = current.isIncome
        ? acc + current.amount
        : acc - current.amount),
    0,
  );

  return { ...data, allTransactions: result.reverse() };
};
