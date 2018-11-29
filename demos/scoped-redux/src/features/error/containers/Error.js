import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ErrorRenderer from '../renderers/Error'
import { dismiss } from '../actionCreators'
import { selectError } from '../selectors'

const propTypes = {
  message: PropTypes.string,
}

const Error = props => (props.message ? <ErrorRenderer {...props} /> : null)

Error.propTypes = propTypes

export default connect(
  selectError,
  {
    onDismiss: dismiss,
  }
)(Error)
