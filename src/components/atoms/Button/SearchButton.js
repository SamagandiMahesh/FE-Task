import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: rubik, sans-serif;
  background: #005dad;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  border-radius: 22px;
  height: 44px;
  padding-left: 22px;
  padding-right: 22px;
  border: none;

  &:hover {
    background: #5cb4ff;
  }
`;


const SearchButton = props => {
    const {label, clickHandler} = props;
  return (
    <StyledButton type='submit' onClick={clickHandler} data-testid="search-button" >{label}</StyledButton>
  )
}

SearchButton.propTypes = {
    label: PropTypes.string,
    clickHandler: PropTypes.func
}

SearchButton.defaultProps = {
    label: 'Search',
    clickHandler: () => {}
}

export default SearchButton