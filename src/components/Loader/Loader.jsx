import { ThreeDots } from 'react-loader-spinner';

export const CustomLoader = () => (
  <div style={{ textAlign: 'center', margin: '20px' }}>
    <div style={{ display: 'inline-block' }}>
      <ThreeDots color="#00BFFF" height={50} width={50} />
    </div>
  </div>
);
