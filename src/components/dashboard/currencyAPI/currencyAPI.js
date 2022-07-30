async function handlingResponseStatus(url = '') {
  const response = await fetch(url);

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function getCurrency() {
  return handlingResponseStatus(
    'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
  );
}
