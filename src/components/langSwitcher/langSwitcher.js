import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './langSwitcher.module.css';
import sprite from '../../images/sprite.svg';

export const LangSwitcher = () => {
  const { i18n } = useTranslation();
  let navigate = useNavigate();
  return (
    <Menu>
      <MenuButton
        aria-label={'open menu change language'}
        transition="all 0.2s"
        className={styles.menuBtn}
      >
        <svg className={styles.icon} width="18" height="18">
          <use href={`${sprite}#lang`}></use>
        </svg>
      </MenuButton>
      <MenuList zIndex={1500}>
        <MenuItem
          w={50}
          aria-label={'change english language'}
          className={`${styles.menuSelect} ${styles.eng}`}
          onClick={() => i18n.changeLanguage('en')}
        ></MenuItem>
        <MenuItem
          aria-label={'change ukraninian language'}
          className={`${styles.menuSelect} ${styles.ua}`}
          onClick={() => i18n.changeLanguage('ua')}
        ></MenuItem>
        <MenuItem
          aria-label={'change russian language'}
          className={`${styles.menuSelect} ${styles.ru}`}
          onClick={() => {
            navigate('/home/ru', { replace: true });
          }}
        ></MenuItem>
      </MenuList>
    </Menu>
  );
};
