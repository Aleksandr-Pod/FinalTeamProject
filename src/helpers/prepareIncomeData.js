export const prepareIncomeData = data => {
  const result = data.allTransactions.sort(
    (a, b) =>
      // a.date !== b.date ?
      Date.parse(
        `${a.date.slice(6, 10)} ${a.date.slice(3, 5)} ${a.date.slice(0, 2)}`,
      ) -
      Date.parse(
        `${b.date.slice(6, 10)} ${b.date.slice(3, 5)} ${b.date.slice(0, 2)}`,
      ),
    // Date.parce(`${a.createdAt}`) - Date.parce(`${b.createdAt}`),
  );
  // расчёт текущего балланса для каждого элемента
  result.reduce(
    (acc, current) =>
      (current.balance = current.isIncome
        ? acc + current.amount
        : acc - current.amount),
    0,
  );

  return { ...data, allTransactions: result.reverse() };
};
