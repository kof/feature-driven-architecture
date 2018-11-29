import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  message: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
}

const Error = ({ message, onDismiss }) => (
  <p style={{ backgroundColor: '#e99', padding: 10 }}>
    <b>{message}</b>{' '}
    <button
      onClick={e => {
        e.preventDefault()
        onDismiss()
      }}
    >
      Dismiss
    </button>
  </p>
)

Error.propTypes = propTypes

export default Error
