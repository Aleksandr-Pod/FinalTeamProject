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
    backgroundColor: state.isSelected ? '#d9bcff' : '#ebebeb',
  }),

  control: () => ({
    '@media screen and (min-width: 320px)': {
      width: 278,
    },
    // '@media screen and (min-width: 768px)': {
    //   width: 158,
    // },
      height: 48,
  }),

  valueContainer: () => ({
    paddingLeft: 20,
    paddingTop: 12,
    paddingBottom: 12,
  }),
  menu: () => ({
    backgroundColor: 'inherit',
    borderRadius: 20,
    boxShadow: 'none',
  }),
  container: () => ({
    border: '1px solid #000000',
    borderRadius: 30,
    cursor: 'pointer',
  }),
  placeholder: () => ({
    fontFamily: 'Circe, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.5,
    color: '#000000'  
  })
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