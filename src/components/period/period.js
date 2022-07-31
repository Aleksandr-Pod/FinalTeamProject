// import styles from './period.module.css';
import Select from 'react-select';

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
  control: () => ({
    '@media screen and (min-width: 320px)': {
      width: 280,
    },
    '@media screen and (min-width: 768px)': {
      width: 160,
    },
    height: 50,
  }),

  valueContainer: provided => ({
    ...provided,

    paddingLeft: 20,
    paddingTop: 12,
    paddingBottom: 12,
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: 'inherit',
    borderRadius: 20,
    boxShadow: 'none',
  }),
  container: provided => ({
    ...provided,
    border: '1px solid #000000',
    borderRadius: 30,

    cursor: 'pointer',
  }),
};

export const Period = () => {
    return (
        <div>
            <Select
                defaultValue="Month"
                options={months}
                tyles={customStyles}
            />
            
            <Select
                options={years}
                styles={customStyles}
            />
        </div>        
    );
}