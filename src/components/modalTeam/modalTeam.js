import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaRegTimesCircle, FaGithub } from "react-icons/fa";
import styles from './modalTeam.module.css';

import logo from '../../images/logoTeam.jpg';
import OPodmazko from '../../images/team/OPodmazko.jpg';
import SChekhov from '../../images/team/SChekhov.jpg';
import OStarichenko from '../../images/team/OStarichenko.jpg';
import OLosev from '../../images/team/OLosev.jpg';
import TKuchma from '../../images/team/TKuchma.jpg';
import DFedash from '../../images/team/DFedash.jpg';
import OMandrichenko from '../../images/team/OMandrichenko.jpg';
import ADeynega from '../../images/team/ADeynega.jpg';

const modalRoot = document.getElementById('modal-root');

export default function ModalTeam({ closeModalTeam }) { 

    const onBackdropClick = e => {
        if (e.target === e.currentTarget) {
            closeModalTeam();
        }
    };

    const closeModalByEsc = e => {
        if (e.code === 'Escape') {
            closeModalTeam();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', closeModalByEsc);
        return () => {
            window.removeEventListener('keydown', closeModalByEsc);
        };
    });

    return createPortal(
        <div className={styles.backdrop} onClick={onBackdropClick}>
            <div className={styles.modal}>
                <button
                    type="button"
                    className={styles.close}
                    onClick={() => closeModalTeam()}
                >
                    <FaRegTimesCircle size={20} />                    
                </button>
                <div className={styles.team}>
                    <h2 className={styles.title}>Team "Try Catch"</h2>
                    <img
                        className={styles.logo}
                        src={logo}
                        alt='logo'
                    />                    
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a                            
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/Aleksandr-Pod"
                            className={styles.ref}                            
                        >
                            <div className={styles.foto}>
                                <img
                                    className={styles.img}
                                    src={OPodmazko}
                                    alt='OPodmazko'
                                />
                            </div>
                            <h3 className={styles.name}>Oleksandr<br />Podmazko</h3>
                            <div className={styles.wrap}>
                                <p className={styles.role}>Team Lead</p>
                                <FaGithub /> 
                            </div>                                               
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a                            
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/StasChekhov"
                            className={styles.ref}                            
                        >
                            <div className={styles.foto}>
                                <img
                                    className={styles.img}
                                    src={SChekhov}
                                    alt='SChekhov'
                                />
                            </div>
                            <h3 className={styles.name}>Stanislav<br />Chekhov</h3>
                            <div className={styles.wrap}>
                                <p className={styles.role}>Scrum Master</p>
                                <FaGithub /> 
                            </div> 
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a                            
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/Glasgalas"
                            className={styles.ref}                            
                        >
                            <div className={styles.foto}>
                                <img
                                    className={styles.img}
                                    src={OStarichenko}
                                    alt='OStarichenko'
                                />
                            </div>
                            <h3 className={styles.name}>Oleksandr<br />Starichenko</h3>
                            <div className={styles.wrap}>
                                <p className={styles.role}>Backend</p>
                                <FaGithub /> 
                            </div>
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a                            
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/alexlex7"
                            className={styles.ref}                            
                        >
                            <div className={styles.foto}>
                                <img
                                    className={styles.img}
                                    src={OLosev}
                                    alt='OLosev'
                                />
                            </div>
                            <h3 className={styles.name}>Oleksii<br />Losev</h3>
                            <div className={styles.wrap}>
                                <p className={styles.role}>Developer</p>
                                <FaGithub /> 
                            </div>
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a                            
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/TanyaKuchma27"
                            className={styles.ref}                            
                        >
                            <div className={styles.foto}>
                                <img
                                    className={styles.img}
                                    src={TKuchma}
                                    alt='TKuchma'
                                />
                            </div>
                            <h3 className={styles.name}>Tetiana<br />Kuchma</h3>
                            <div className={styles.wrap}>
                                <p className={styles.role}>Developer</p>
                                <FaGithub /> 
                            </div>
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a                            
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/ArtemDeynega"
                            className={styles.ref}                            
                        >
                            <div className={styles.foto}>
                                <img
                                    className={styles.img}
                                    src={ADeynega}
                                    alt='ADeynega'
                                />
                            </div>
                            <h3 className={styles.name}>Artem<br />Deynega</h3>
                            <div className={styles.wrap}>
                                <p className={styles.role}>Developer</p>
                                <FaGithub /> 
                            </div>
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a                            
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/mandrykk"
                            className={styles.ref}                            
                        >
                            <div className={styles.foto}>
                                <img
                                    className={styles.img}
                                    src={OMandrichenko}
                                    alt='OMandrichenko'
                                />
                            </div>
                            <h3 className={styles.name}>Olga<br />Mandrichenko</h3>
                            <div className={styles.wrap}>
                                <p className={styles.role}>Developer</p>
                                <FaGithub /> 
                            </div>
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a                            
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/DenisFedash"
                            className={styles.ref}                            
                        >
                            <div className={styles.foto}>
                                <img
                                    className={styles.img}
                                    src={DFedash}
                                    alt='DFedash'
                                />
                            </div>
                            <h3 className={styles.name}>Denis<br />Fedash</h3>
                            <div className={styles.wrap}>
                                <p className={styles.role}>Developer</p>
                                <FaGithub /> 
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>,
        modalRoot,
    );
}