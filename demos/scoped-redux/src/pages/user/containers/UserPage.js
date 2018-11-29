import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Profile } from '../../../features/profile'
import { StarredRepos } from '../../../features/starredRepos'
import { handle as handleError } from '../../../features/error'

const propTypes = {
  login: PropTypes.string.isRequired,
}

const UserPage = ({ login, onError }) => (
  <Fragment>
    <Profile login={login} onError={onError} />
    <StarredRepos login={login} onError={onError} />
  </Fragment>
)

UserPage.propTypes = propTypes

export default connect(
  (state, props) => ({
    login: props.match.params.login,
  }),
  {
    onError: handleError,
  }
)(UserPage)
