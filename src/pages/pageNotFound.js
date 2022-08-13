import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PageNotFound = ({ path = '/' }) => {
  const { t } = useTranslation();
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{t('err404')}</h2>
      <Link to={path} replace>
        {t('err404redirect')}
      </Link>
    </div>
  );
};
export default PageNotFound;
