import { Diagram } from '../components/diagram/diagram.jsx';
import styles from './styles.module.css';

export const StatPage = () => {
  return (
    <>
      <h3 className={styles.stat}>Statistics</h3>  
      <Diagram/>
    </>
  )  
};