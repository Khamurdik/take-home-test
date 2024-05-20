import React from 'react';
import { useAppContext } from '../store/context/ApplicationContext';

const Dashboard: React.FC = () => {
  const { value, setValue } = useAppContext();

  return (
    <div>
      <p>Value: {value}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Dashboard;