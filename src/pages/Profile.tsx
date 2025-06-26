import React, { type ReactNode } from 'react';

interface ProfileProps {
  children?: ReactNode;
}

const Profile: React.FC<ProfileProps> = ({ children }) => {
  return (
    <div>
      <h1>Profile Page</h1>
      {children}
    </div>
  );
};

export default Profile;
