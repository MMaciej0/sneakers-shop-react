import React from 'react';
import { useGlobalContext } from '../../contexts/GlobalContext/GlobalContext';

function Dashboard() {
  const { user } = useGlobalContext();
  return (
    <div>
      <h2>Hello {user?.email}</h2>
    </div>
  );
}

export default Dashboard;
