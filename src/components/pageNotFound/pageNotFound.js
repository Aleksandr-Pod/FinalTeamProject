import { Link } from 'react-router-dom';

export const PageNotFound = ({ path }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Page not Found</h2>
      <Link to={path}>Go back to your page</Link>
    </div>
  );
};
