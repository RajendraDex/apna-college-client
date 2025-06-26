import React, { type ReactNode } from 'react';

interface TopicsProps {
  children?: ReactNode;
}

const Topics: React.FC<TopicsProps> = ({ children }) => {
  return (
    <div>
      <h1>Topics Page</h1>
      {children}
    </div>
  );
};

export default Topics;
