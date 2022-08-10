import { Link } from 'react-router-dom';

const PageNotFound = ({ path = '/' }) => {

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Page not Found</h2>
      <Link to={path} replace>
        Go back to your page
      </Link>
    </div>
  );
};
export default PageNotFound;
