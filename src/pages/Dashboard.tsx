import React, { type ReactNode } from 'react';

interface DashboardProps {
  children?: ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <div >
      <h1>Dashboard Page</h1>
      {children}
    </div>
  );
};

export default Dashboard;

