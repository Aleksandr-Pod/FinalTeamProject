import styles from './period.module.css';
import Select from 'react-select';
import sprite from '../../images/sprite.svg';

const months = [
    { value: 'All months', label: 'All months' },
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'February', label: 'February' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' }
]

const years = [
    { value: 'All years', label: 'All years' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
]

const customStyles = {
  option: (base, state) => ({
    ...base,
    color: state.isSelected || state.isFocused ? '#FF6596' : '#000000',
    backgroundColor: state.isSelected || state.isFocused ? '#FFFFFF' : 'inherit',
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
    background: 'rgba(255, 255, 255, 0.6)',

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
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Select
          placeholder={'Month'}
          options={months}
          styles={customStyles}
        />
        <svg className={styles.arrow} width="18" height="9">
          <use href={`${sprite}#icon-arrow`}></use>
        </svg>
      </li>
      <li className={styles.item}>
        <Select
          placeholder={'Year'}
          options={years}
          styles={customStyles}
        />
        <svg className={styles.arrow} width="18" height="9">
          <use href={`${sprite}#icon-arrow`}></use>
        </svg>
      </li>      
    </ul>        
  );
}