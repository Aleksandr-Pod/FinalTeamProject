import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <span>©</span>
                    <p className={styles.text}>&nbsp; 2022 | All Rights Reserved <span className={styles.border}>|&nbsp;</span></p>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.text}> Developed by </p>
                    <button className={styles.btn} type="button">
                        <span className={styles.team}>team</span>
                    </button>
                </div>
            </div>
        </footer>
    );
}