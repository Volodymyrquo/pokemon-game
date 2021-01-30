import React from 'react';
import classes from './Layout.module.css';

const Layout = ({ title, descr, id, urlBg, colorBg, children }) => {
  const style = { ...urlBg, ...colorBg };

  return (
    <section className={classes.root} id={id} style={style}>
      <div className='wrapper'>
        <article>
          <div className={classes.title}>
            <h3>{title}</h3>
            <span className={classes.separator}></span>
          </div>
          <div className={`${classes.desc} ${classes.full}`}>
            <p>{descr}</p>
            {children}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
