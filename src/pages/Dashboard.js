import React from 'react';
import { useGlobalContext } from '../context';

function Dashboard() {
  const { user } = useGlobalContext();
  return (
    <div>
      <h2>Hello {user?.email}</h2>
    </div>
  );
}

export default Dashboard;
