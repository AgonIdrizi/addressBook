import React, { useState } from 'react';
import Button, { TYPES } from '../UI/Button/Button';
import './SearchBox.scss';

const SearchBox: React.FunctionComponent = (): JSX.Element => {
  const [value, setValue] = useState('');
  const onSearchHandler = () => {
    console.log('OnSearch Handler');
  };
  return (
    <section className="Search">
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        id="search"
        placeholder="Search"
      />
      <Button onClick={() => onSearchHandler()} buttonType={TYPES.PRIMARY}>
        Search
      </Button>
    </section>
  );
};

export default SearchBox;
