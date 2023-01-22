import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Column from "../../atoms/Grid/Column";
import Details from "../../atoms/Details/Details";
import Row from "../../atoms/Grid/Row";
import { MEDIA } from "../../atoms/Grid/config";

const StyledAirlineNameSection = styled.section`
  font-size: 12px;
  line-height: 18px;
  padding: 24px;
  label {
    text-transform: uppercase;
    color: rgb(76, 76, 76);
  }

  span {
    color: rgb(144, 144, 144);
  }
`;

const StyledAirlinePriceSection = styled.section`
  letter-spacing: 0.5px;
  color: rgb(76, 76, 76);
  font-size: 24px;
  text-align: right;
  background: rgb(247, 247, 247);
  padding: 24px;

  label {
    display: block;
  }

  span {
    text-align: right;
    color: rgb(144, 144, 144);
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    display: block;
  }
`;

const StyledItinerarySection = styled.section`
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 16px 0px;
  border-radius: 8px;
  margin: 24px -12px;

  .align-left {
    text-align: left;
  }

  .align-right {
    text-align: left;
    ${MEDIA.tablet`
    text-align: right;
  `}
  }
`;

const formatDate = (dt) => {
  const d = new Date(dt.year,dt.month,dt.dayOfMonth,dt.hourOfDay,dt.minute,dt.second).toDateString();
  return d;
}

const ItineraryList = ({ label, filteredList }) => { 
  return (
    <ul data-testid="flight-detail-list">
      {filteredList.map((list, index) => (
        <Column lgCols={8} lgOffset={2} mdCols={6} mdOffset={1} smCols={4} key={index} as="li">
          <StyledItinerarySection>
            <StyledAirlineNameSection>
              <label>{label}</label>
              <span>: {list.carrier}</span>
            </StyledAirlineNameSection>

            <Row  as="section">
              <Column lgCols={6}  mdCols={4} smCols={4} className="align-left">
                  <Details title="Departure" loc={list.departureLocation} date={formatDate(list.departureDate)}/>
              </Column>
              <Column lgCols={6}  mdCols={4} smCols={4} className="align-right">
                  <Details title="Arrival" loc={list.arrivalLocation} date={formatDate(list.arrivalDate)}/>
              </Column>
            </Row>
            <StyledAirlinePriceSection>
              <label>{list.price}</label>
              <span>per passenger</span>
            </StyledAirlinePriceSection>
          </StyledItinerarySection>
        </Column>
      ))}
    </ul>
  );
};

ItineraryList.defaultProps = {
  label: "Airlines",
  filteredList: [],
};

ItineraryList.propTypes = {
  label: PropTypes.string,
  filteredList: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ItineraryList;
