import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Title from '../../atoms/Title/Title';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
    background: #005dad;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Header = props => {
    const {label} = props;
    return (
    <StyledHeader data-testid="header">
        <Link to="/home"><Title title={label} color="#fff"/></Link>
    </StyledHeader>
  )
}

Header.defaultProps = {
    label: 'EDreams Odigeo'
}
Header.propTypes = {
    label: PropTypes.string
}

export default Header