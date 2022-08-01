import styles from './statTable.module.css';

const data = [
    {
        "id": 1,
        "sum": 10,
        "backgroundColor": "#FED057",
        "category": "Basic expenses"
    },
    {
        "id": 2,
        "sum": 20,
        "backgroundColor": "#FFD8D0",
        "category": "Products"
        },
        {
        "id": 3,
        "sum": 30,
        "backgroundColor": "#FD9498",
        "category": "Car"
    },
    {
        "id": 4,
        "sum": 15,
        "backgroundColor": "#C5BAFF",
        "category": "Self care"
        },
        {
        "id": 5,
        "sum": 20,
        "backgroundColor": "#6E78E8",
        "category": "Child care"
    },
    {
        "id": 6,
        "sum": 25,
        "backgroundColor": "#4A56E2",
        "category": "Household products"
        },
        {
        "id": 7,
        "sum": 60,
        "backgroundColor": "#81E1FF",
        "category": "Education"
    },
    {
        "id": 8,
        "sum": 80,
        "backgroundColor": "#24CCA7",
        "category": "Leisure"
    },
    {
        "id": 9,
        "sum": 30,
        "backgroundColor": "#00AD84",
        "category": "Other expenses"
    },
]

export const StatTable = () => {
    return (
        <table className={styles.table}>
            <thead className={styles.header}>
                <tr className={styles.tr}>
                    <th>Category</th>
                    <th>Sum</th>
                </tr>
            </thead>
            <tbody>
                {data.map(({id, sum, backgroundColor, category}) => (
                    <tr key={id} className={styles.row}>
                        <td className={styles.category}>
                            <div
                                className={styles.square}
                                style={{background: backgroundColor}}
                            ></div>
                            <p className={styles.text}>{category}</p>
                        </td>
                        <td className={styles.sum}>
                            {sum}
                        </td>
                    </tr>
                ))}
                <tr className={styles.data}>
                    <th className={styles.title}>Expenses:</th>
                    <td className={styles.expenses}>1250</td>
                </tr>
                <tr className={styles.data}>
                    <th className={styles.title}>Income:</th>
                    <td className={styles.income}>2500</td>
                </tr>
            </tbody>
        </table>
    );
};