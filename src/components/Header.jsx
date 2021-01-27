import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.root}>
      <div className={classes.forest}></div>
      <div className={classes.container}>
        <h1>This is title</h1>
        <p>This is Description!</p>
      </div>
    </header>
  );
};

export default Header;
