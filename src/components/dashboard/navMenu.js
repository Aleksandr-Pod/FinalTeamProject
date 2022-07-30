import { Link } from 'react-router-dom';

export const NavMenu = () => {
  return (
    <>
      <Link to="/home">Home </Link>
      <Link to="/diagram">stat </Link>
      <Link to="/currency">currency</Link>
    </>
  );
};
