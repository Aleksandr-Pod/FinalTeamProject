import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatistics } from '../../redux/statistics/statisticsOperations';
import sprite from '../../images/sprite.svg';
import styles from './period.module.css';

const months = [
  { value: '1', label: 'January' },
  { value: '2', label: 'February' },
  { value: '3', label: 'March' },
  { value: '4', label: 'April' },
  { value: '5', label: 'May' },
  { value: '6', label: 'June' },
  { value: '7', label: 'July' },
  { value: '8', label: 'August' },
  { value: '9', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' },
];

const years = [{ value: '2022', label: '2022' }];

const customStyles = {
  option: (base, state) => ({
    ...base,
    color: state.isSelected || state.isFocused ? '#FF6596' : '#000000',
    backgroundColor:
      state.isSelected || state.isFocused ? '#FFFFFF' : 'inherit',
    paddingLeft: 20,
    paddingTop: 13,
    height: 44,
    border: 'none',
    cursor: 'pointer',
  }),
  control: () => ({
    '@media screen and (min-width: 320px)': {
      width: 280,
    },
    '@media screen and (min-width: 768px)': {
      width: 160,
    },
    height: 50,
  }),

  valueContainer: base => ({
    ...base,
    paddingLeft: 20,
    paddingTop: 12,
    paddingBottom: 12,
  }),
  indicatorsContainer: () => ({
    display: 'none',
  }),
  menu: base => ({
    ...base,
    backgroundColor: 'inherit',
    borderRadius: 20,
    boxShadow: 'none',
  }),
  placeholder: base => ({
    ...base,
    margin: 0,
    fontFamily: 'Circe, sans-serif',
    color: '#000000',
    fontSize: 18,
    lineHeight: 1.44,
    fontWeight: 400,
  }),
  menuList: base => ({
    ...base,
    '@media screen and (min-width: 320px)': {
      maxHeight: 352,
    },
    '@media screen and (min-width: 768px)': {
      maxHeight: 411,
    },
    padding: 0,
    backdropFilter: 'blur(50px)',
    background: 'rgb(255, 255, 255)',

    borderRadius: 20,
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',

    '::-webkit-scrollbar': {
      height: '100%',
      width: 5,
      backgroundColor: 'transparent',
    },

    '::-webkit-scrollbar-track-piece:corner-present': {
      marginTop: 12,
    },
    '::-webkit-scrollbar-track-piece:start': {
      background: 'transparent',
      marginTop: 10,
      overflow: 'hidden',
    },

    '::-webkit-scrollbar-track-piece:end': {
      backgroundColor: 'transparent',
      marginBottom: 10,
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: 10,
      backgroundColor: '#24CCA7',
    },
    '::-webkit-scrollbar-track': {
      borderRadius: 20,
      backgroundColor: 'transparent',
    },
  }),
  container: base => ({
    ...base,
    border: '1px solid #000000',
    borderRadius: 30,

    cursor: 'pointer',
  }),
  singleValue: base => ({
    ...base,
    margin: 0,
    color: '#000000',
    fontSize: 18,
    lineHeight: 1.5,
  }),
  input: base => ({
    ...base,
    margin: 0,
    padding: 0,
    fontSize: 18,
    lineHeight: 1.5,
    caretColor: 'transparent',
  }),
};

export const Period = () => {
  const { statistics } = useSelector(state => state.statistics);

  const currentMonth = new Date().toISOString().slice(5, 7);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedMonth) {
      dispatch(
        fetchStatistics({
          month: selectedMonth?.value,
          year: selectedYear?.value,
        }),
      );
    }
  }, [selectedMonth, selectedYear, dispatch]);

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Select
          onChange={setSelectedMonth}
          placeholder={'Month'}
          options={months}
          styles={customStyles}
          isSearchable={false}
          defaultValue={
            statistics ? months[statistics.month - 1] : months[currentMonth - 1]
          }
        />
        <svg className={styles.arrow} width="18" height="9">
          <use href={`${sprite}#icon-arrow`}></use>
        </svg>
      </li>
      <li className={styles.item}>
        <Select
          onChange={setSelectedYear}
          placeholder={'Year'}
          options={years}
          styles={customStyles}
          defaultValue={years[0]}
          isSearchable={false}
        />
        <svg className={styles.arrow} width="18" height="9">
          <use href={`${sprite}#icon-arrow`}></use>
        </svg>
      </li>
    </ul>
  );
};
