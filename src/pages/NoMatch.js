import React from 'react'
import PropTypes from 'prop-types'
import Title from '../components/atoms/Title/TitleH2';

const NoMatch = props => {
    const {label} = props;
    return (
        <Title title={label} />
  )
}

NoMatch.defaultProps = {
    label: 'NoMatch'
}
NoMatch.propTypes = {
    label: PropTypes.string
}

export default NoMatch