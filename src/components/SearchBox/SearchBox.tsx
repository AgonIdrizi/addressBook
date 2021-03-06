import React, { useState } from 'react';
import Button, { TYPES } from '../UI/Button/Button';
import './SearchBox.scss';

interface ISearchBoxProps {
  onSearchHandler(value: string): void;
}

const SearchBox: React.FunctionComponent<ISearchBoxProps> = ({
  onSearchHandler
}): JSX.Element => {
  const [value, setValue] = useState('');
  const onChangeHandler = (value: string) => {
    onSearchHandler(value.toLowerCase());
    setValue(value);
  };
  return (
    <section className="Search">
      <div className="SearchBox">
        <input
          onChange={(e) => onChangeHandler(e.target.value)}
          value={value}
          type="text"
          id="search"
          aria-label="search"
          placeholder="Search"
        />
        <Button
          onClick={() => onSearchHandler(value)}
          buttonType={TYPES.PRIMARY}
        >
          Search
        </Button>
      </div>
      <div className="FilteringInfo">{value ? 'filtering is active': ''}</div>
    </section>
  );
};

export default SearchBox;
