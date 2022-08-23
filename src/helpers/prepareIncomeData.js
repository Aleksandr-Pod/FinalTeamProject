export const prepareIncomeData = data => {
  const result = data.allTransactions.sort(
    (a, b) =>
      Date.parse(`${b.date.slice(3, 5)} ${b.date.slice(0, 2)} 2022`) -
      Date.parse(`${a.date.slice(3, 5)} ${a.date.slice(0, 2)} 2022`),
  );
  // расчёт балланса для каждого элемента
  return { ...data, allTransactions: result };
};
