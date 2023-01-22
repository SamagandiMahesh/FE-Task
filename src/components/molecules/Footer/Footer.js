import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components';
import Label from '../../atoms/Label/Label';

const StyledFooter = styled.footer`
    background: #fff;
    color: #000;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px dashed #c1c1c1;
`;


const Footer = props => {
    const {label} = props;
    return (
        <StyledFooter data-testid="footer">
            <Label label={label}/>
        </StyledFooter>
  )
}

Footer.defaultProps = {
    label: 'Edreams Odigeo Footer'
}
Footer.propTypes = {
    label: PropTypes.string
}

export default Footer