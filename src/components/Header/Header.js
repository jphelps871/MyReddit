import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NavDropDown from './NavDropDown/NavDropDown';
import Search from './Search/Search';
import SubmitSearch from './SubmitSearch/SubmitSearch';
import './Header.css';

// eslint-disable-next-line object-curly-newline
const Header = ({ searchReddit, subReddit, onChange, onClick }) => {
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = ({ target }) => {
    setSearchValue(target.value);
  };

  useEffect(() => {
    if (searchReddit) setSearchValue('');
  }, [searchReddit]);

  return (
    <header className="main-container">
      <NavDropDown
        onChange={onChange}
        subReddit={subReddit}
        searchReddit={searchReddit}
      />
      <Search onChange={handleSearch} />
      <SubmitSearch onClick={onClick} searchValue={searchValue} />
    </header>
  );
};

Header.propTypes = {
  searchReddit: PropTypes.string,
  subReddit: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

Header.defaultProps = {
  searchReddit: '',
  subReddit: '',
  onChange: () => {},
  onClick: () => {},
};

export default Header;
