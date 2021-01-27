import React from 'react';
import ReactDOM from 'react-dom';

const List = () => {
  return (
    <ul>
      <li>First list</li>
      <li>Second list</li>
    </ul>
  );
};

const Header = () => {
  return <h1>Hello React JS!</h1>;
};

const el = (
  <>
    <Header />
    <List />
  </>
);
ReactDOM.render(el, document.getElementById('root'));
