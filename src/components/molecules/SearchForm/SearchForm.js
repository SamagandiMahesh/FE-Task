import React from 'react'
import PropTypes from 'prop-types'
import Row from '../../atoms/Grid/Row'
import Column from '../../atoms/Grid/Column'
import Label from '../../atoms/Label/Label'
import ODSelect from '../../atoms/Select/Select'
import SearchButton from '../../atoms/Button/SearchButton'
import ODDatePicker from '../../atoms/DatePicker/DatePicker'
import styled from 'styled-components'
import { MEDIA } from '../../atoms/Grid/config'

const StyledFormColumn = styled(Column)`
    margin: 10px 0;

    label {
        display: flex;
        margin-bottom: 5px;
    }

    ${MEDIA.tablet`
        margin: 20px 0;
  `}
`;


const SearchForm = ({ location, selectedDate,dateChangeHandler, arrivalLocChangeHandler, departureLocChangeHandler,flightSearch}) => {
  return (
    <React.Fragment>
    <Row as="form" onSubmit={flightSearch} data-testid="flight-search-form">
        <StyledFormColumn lgCols={3} mdCols={2} smCols={4}>
            <Label label="Departure location"/>
            <ODSelect options={location} onChangeHandler={departureLocChangeHandler}/>
        </StyledFormColumn>
        <StyledFormColumn lgCols={3} mdCols={2} smCols={4}>
            <Label label="Arrival location"/>
            <ODSelect options={location} onChangeHandler={arrivalLocChangeHandler}/>
        </StyledFormColumn>
        <StyledFormColumn lgCols={3} mdCols={2} smCols={4}>
            <Label label="Departure date"/>
            <ODDatePicker 
                 selectedDate = {selectedDate}
                 dateChangeHandler = {dateChangeHandler}
            />
        </StyledFormColumn>
        <StyledFormColumn lgCols={3} mdCols={2} smCols={4}>
        <Label label="&nbsp;"/>
            <SearchButton label="Search location" />
        </StyledFormColumn>
    </Row>
    </React.Fragment>
  )
}

SearchForm.propTypes = {
    location: PropTypes.arrayOf(PropTypes.string),
    flightSearch: PropTypes.func,
    selectedDate: PropTypes.string,
    dateChangeHandler: PropTypes.func,
    arrivalLocChangeHandler: PropTypes.func,
    departureLocChangeHandler: PropTypes.func,
}

export default SearchForm