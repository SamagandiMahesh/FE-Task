import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTitle = styled.h1`
    color: ${props =>(props.color ? '#fff' : '#000')};
    font-size: 24px;
    margin: 0;
`;


const Title = ({title, color}) => {
  return (
    <StyledTitle color={color} data-testid="title-h1">{title} </StyledTitle>
  )
}

Title.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string
}

export default Title