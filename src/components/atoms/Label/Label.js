import React from 'react'
import PropTypes from 'prop-types'

const Label = ({label}) => {
  return (
    <label data-testid="label">{label}</label>
  )
}

Label.propTypes = {
    label: PropTypes.string
}

Label.defaultProps = {
    label: 'Default Value'
}

export default Label