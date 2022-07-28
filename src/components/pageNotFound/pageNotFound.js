import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Page not Found</h2>
      <Link to="/register">Go back to your page</Link>
    </div>
  );
};
