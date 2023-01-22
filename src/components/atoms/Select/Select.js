import React from 'react'
import PropTypes from 'prop-types'
import Select, { StylesConfig } from 'react-select';

const colourStyles: StylesConfig<> = {
  control: (styles) => ({ ...styles, backgroundColor: '#fff', height: '44px', borderColor: '#ccc' }),
  input: (styles) => ({ ...styles, }),
  placeholder: (styles) => ({ ...styles,  }),
  singleValue: (styles) => ({ ...styles, }),
};


const ODSelect = ({
    defaultValue,
    onChangeHandler,
    options
}) => {
  return (
    <Select
        defaultValue={defaultValue}
        onChange={onChangeHandler}
        options={options}
        styles={colourStyles}
        data-testid="location-select"
      />
  )
}

ODSelect.propTypes = {
    defaultValue: PropTypes.string,
    onChangeHandler: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string)
}

ODSelect.defaultProps = {
    defaultValue: 'Spain',
    onChangeHandler: () =>{},
    options: ['Spain', 'Italy']
}
export default ODSelect