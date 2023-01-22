import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTitle = styled.h2`
font-size: 30px;
padding: 20px 0;
margin-bottom: 24px;
text-align: center;
border-bottom: 1px solid #ccc;
`;


const Title = ({title}) => {
  return (
    <StyledTitle data-testid="title-h2">{title}</StyledTitle>
  )
}

Title.propTypes = {
    title: PropTypes.string
}

export default Title