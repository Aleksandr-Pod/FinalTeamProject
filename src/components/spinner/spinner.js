import { BallTriangle } from 'react-loader-spinner';

export const Spinner = () => (
  <BallTriangle
    type="BallTriangle"
    color="var(--violet)"
    height={100}
    width={100}
    visible={true}
    wrapperStyle={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      zIndex: '99',
      transform: 'translate(-50%, -50%)',
    }}
  />
);
