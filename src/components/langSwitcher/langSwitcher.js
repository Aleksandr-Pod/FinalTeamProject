import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu';
import styles from './langSwitcher.module.css';
import sprite from '../../images/spriteLang.svg';

export const LangSwitcher = () => {
  return (
    <Menu>
      <MenuButton className={styles.menuBtn}></MenuButton>
      <MenuList>
        <MenuItem>
          <svg
            // className={styles.arrow}
            width="18"
            height="9"
          >
            <use href={`${sprite}#icon-ua`}></use>
          </svg>
        </MenuItem>
        <MenuItem>
          <svg class="icon" width="40" height="40">
            <use href={`${sprite}#icon-ru`}></use>
          </svg>
        </MenuItem>
        <MenuItem>en</MenuItem>
      </MenuList>
    </Menu>
  );
};
