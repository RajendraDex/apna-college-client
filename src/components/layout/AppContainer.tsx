// src/layout/AppContainer.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../header/Navbar';
import classes from './app-container.module.css';

const AppContainer: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className={classes.main} >
        <Outlet />
      </main>
    </>
  );
};

export default AppContainer;
