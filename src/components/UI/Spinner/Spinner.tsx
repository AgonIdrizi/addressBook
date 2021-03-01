import React from 'react';
import './Spinner.scss';

const Spinner: React.FC = () => {
  return (
    <div className="Spinner">
      <div className="Bounce1"></div>
      <div className="Bounce2"></div>
      <div className="Bounce3"></div>
    </div>
  );
};

export default Spinner;
