import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
const StyledAirlineDetailsSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 24px;

  .label-section {
    text-transform: uppercase;
    color: rgb(76, 76, 76);
  }

  .time-section {
    font-size: 20px;
    font-weight: 500;
    color: rgb(76, 76, 76);
    padding: 12px 0;
  }

  .location-section {
    color: rgb(144, 144, 144);
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    padding-bottom: 12px;
  }
`;


const Details = ({date, title, loc}) => {
  return (

        <StyledAirlineDetailsSection data-testid="flight-details" >
                <span className="label-section">{title}</span>
                <span className="time-section">{date}</span>
                <span className="location-section">{loc}</span>
            </StyledAirlineDetailsSection>
  )
}

Details.propTypes = {
    date: PropTypes.string,
    title: PropTypes.string,
    loc: PropTypes.string,
}

export default Details