import React from 'react';
import Header from '../Header/Header';
import './Container.scss';

const Container: React.FunctionComponent = ({ children }) => {
  return (
    <div className="AppContainer">
      <Header />
      <main className="Main">{children}</main>
    </div>
  );
};

export default Container;
