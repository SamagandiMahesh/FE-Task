import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const ODDatePicker = ({
    selectedDate,
    dateChangeHandler
}) => {

  return (
    <DatePicker
        selected={selectedDate}
        onChange={dateChangeHandler}
        data-testid="date-picker" 
    />
  )
}

ODDatePicker.propTypes = {
    selectedDate: PropTypes.string,
    dateChangeHandler: PropTypes.func,
}

export default ODDatePicker