import React, { type ReactNode } from 'react';

interface ProgressProps {
  children?: ReactNode;
}

const Progress: React.FC<ProgressProps> = (props) => {
  return (
    <div>
      <h1>Progress Page</h1>
    </div>
  );
};

export default Progress;
