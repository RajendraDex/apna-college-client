import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './navbar.module.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.dashboard}>
        <Link to="/" className={classes.active}>Dashboard</Link>
      </div>
      <div className={classes['navbar-container']}>
        <Link to="/profile" className={classes.active}>Profile</Link> 
        <Link to="/topics" className={classes.active}>Topics</Link>
        <Link to="/progress" className={classes.active}>Progress</Link>
        <button 
         onClick={handleLogout}
        >
            Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
