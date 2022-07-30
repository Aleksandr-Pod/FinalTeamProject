import { Link } from 'react-router-dom';
import sprite from '../../images/sprite.svg';

export const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">            
            <svg>
              <use href={`${sprite}#icon-home`}></use>
            </svg>
          </Link>
        </li>
        <li>
          <Link to="/diagram">
            <svg>
              <use href={`${sprite}#icon-statistics`}></use>
            </svg>
          </Link>
        </li>
        <li>          
          <Link to="/currency">
            <svg>
              <use href={`${sprite}#icon-currency`}></use>
            </svg>
          </Link>
        </li>
      </ul>  
    </nav>
  );
};
