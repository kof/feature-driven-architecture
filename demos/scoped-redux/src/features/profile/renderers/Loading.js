import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  login: PropTypes.string.isRequired,
}

const Loading = ({ login }) => (
  <h1>
    <i>{`Loading ${login}'s profile...`}</i>
  </h1>
)

Loading.propTypes = propTypes

export default Loading
