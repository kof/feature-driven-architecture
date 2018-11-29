import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  fullName: PropTypes.string.isRequired,
}

const Loading = ({ fullName }) => (
  <h1>
    <i>{`Loading ${fullName} details...`}</i>
  </h1>
)

Loading.propTypes = propTypes

export default Loading
