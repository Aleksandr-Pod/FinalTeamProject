import { useState } from 'react';
import styles from './footer.module.css';

import ModalTeam from '../modalTeam/modalTeam';

export default function Footer() {
    const [showModal, setShowModal] = useState(false);

    const toggleModalTeam = () => {
        setShowModal(!showModal);
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <span>©</span>
                    <p className={styles.text}>&nbsp; 2022 | All Rights Reserved <span className={styles.border}>|&nbsp;</span></p>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.text}> Developed by </p>
                    <button className={styles.btn} type="button" onClick={toggleModalTeam}>
                        <span className={styles.team}>Try Catch</span>
                    </button>
                    {showModal && <ModalTeam closeModalTeam={toggleModalTeam} />}
                </div>
            </div>
        </footer>
    );
}