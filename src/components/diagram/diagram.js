import { Chart, Tooltip, Title, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// import styles from './diagram.module.css';

Chart.register(
    Tooltip, Title, ArcElement
)

const data = {
    datasets: [{
        data: [10, 20, 30, 15, 20, 25, 60, 80, 30],
        backgroundColor: [
            '#FED057',
            '#FFD8D0',
            '#FD9498',
            '#C5BAFF',
            '#6E78E8',
            '#4A56E2',
            '#81E1FF',
            '#24CCA7',
            '#00AD84'
        ]
    }],
    labels: [
        'Basic expenses',
        'Products',
        'Car',
        'Self care',
        'Child care',
        'Household products',
        'Education',
        'Leisure',
        'Other expenses'      
    ]
}

export const Diagram = () => {
    return (
        <Doughnut data={data}/>
    );
};