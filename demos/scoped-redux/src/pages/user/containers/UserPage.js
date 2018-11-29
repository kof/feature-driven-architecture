import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Profile } from '../../../features/profile'
import { StarredRepos } from '../../../features/starredRepos'

const propTypes = {
  login: PropTypes.string.isRequired,
}

const UserPage = ({ login }) => (
  <Fragment>
    <Profile login={login} />
    <StarredRepos login={login} />
  </Fragment>
)

UserPage.propTypes = propTypes

export default connect((state, props) => ({
  login: props.match.params.login,
}))(UserPage)
