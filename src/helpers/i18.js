import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// import { useTranslation } from 'react-i18next';
// const { t } = useTranslation();
//  {t('nav.statistics')}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          balanceYour: 'YOUR BALANCE',
          exit: 'Exit',
          carency: { carency: 'Currency', purchase: 'Purchase', sale: 'Sale' },
          nav: {
            home: 'Home',
            statistics: 'Statistics',
          },
          transactions: {
            text: "You haven't made any transactions yet",
            date: 'Date',
            type: 'Type',
            category: 'Category',
            comment: 'Comment',
            sum: 'Sum',
            balance: 'Balance',
          },
          diagram: {
            text: ' There are no expence transactions for this period.',
          },
          addTransactions: {
            text: 'Add transaction',
            expense: 'Expense',
            income: 'Income',
            select: 'Select a category',
            add: 'Add',
            cancel: 'Cancel',
            errCategory: 'please, select category',
            errAmountReq: 'amount is a required field',
            errAmountBigSum: 'amount must be less than or equal to 999 999',
            errAmountLittleSum: 'amount must be greater than or equal to 0.01',
            errDate: 'date is a required field',
          },
          month: {
            jan: 'January',
            feb: 'February',
            mar: 'March',
            apr: 'April',
            may: 'May',
            jun: 'June',
            jul: 'July',
            aug: 'August',
            sep: 'September',
            oct: 'October',
            nov: 'November',
            dec: 'December',
          },
          category: 'Category',
          sum: 'Sum',
          expense: 'Expense',
          income: 'Income',
          balance: 'Balance',
          err404: 'Page not found',
          err404redirect: 'Go back to your page',
          logout: {
            text: 'Are you sure you want to log out?',
            title: 'Log out',
            logout: 'Exit',
            cancel: 'Cancel',
          },
        },
      },
      ua: {
        translation: {
          balanceYour: 'ТВІЙ БАЛАНС',
          exit: 'Вихід',
          carency: { carency: 'Валюта', purchase: 'Купівля', sale: 'Продаж' },
          nav: {
            home: 'Дім',
            statistics: 'Статистика',
          },
          transactions: {
            text: 'Ви ще не зробили жодної транзакції.',
            date: 'Дата',
            type: 'Тип',
            category: 'Категорія',
            comment: 'Коментар',
            sum: 'Сума',
            balance: 'Баланс',
          },
          diagram: {
            text: 'Немає видаткових операцій за вказаний період.',
          },
          addTransactions: {
            text: 'Додати транзакцію',
            expense: 'Витрати',
            income: 'Прибутки',
            select: 'Виберіть категорію',
            add: 'Додати',
            cancel: 'Відмінити',
            errCategory: 'оберіть, будь ласка, категорію',
            errAmountReq: "поле сума обов'язкове",
            errAmountBigSum: 'сума має бути меншою або дорівнювати 999 999',
            errAmountLittleSum: 'сума має бути більшою або дорівнювати 0.01',
            errDate: "поле дата обов'язкове",
          },
          month: {
            jan: 'Січень',
            feb: 'Лютий',
            mar: 'Березень',
            apr: 'Квітень',
            may: 'Травень',
            jun: 'Червень',
            jul: 'Липень',
            aug: 'Серпень',
            sep: 'Вересень',
            oct: 'Жовтень',
            nov: 'Листопад',
            dec: 'Грудень',
          },
          category: 'Категорія',
          sum: 'Сума',
          expense: 'Витрати',
          income: 'Прибутки',
          balance: 'Баланс',
          err404: 'Сторінку не знайдено',
          err404redirect: 'Повернутися на початкову сторінку',
          logout: {
            text: 'Впевнені, що хочете вийти?',
            title: 'Вихід',
            logout: 'Вийти',
            cancel: 'Відміна',
          },
        },
      },
    },
  });

export default i18n;
