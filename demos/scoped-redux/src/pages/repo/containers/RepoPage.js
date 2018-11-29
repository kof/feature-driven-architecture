import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Repo } from '../../../features/repo'
import { Stargazers } from '../../../features/stargazers'
import { handle as handleError } from '../../../features/error'

const propTypes = {
  fullName: PropTypes.string.isRequired,
}

const RepoPage = ({ fullName, onError }) => (
  <Fragment>
    <Repo fullName={fullName} onError={onError} />
    <Stargazers fullName={fullName} onError={onError} />
  </Fragment>
)

RepoPage.propTypes = propTypes

export default connect(
  (state, props) => ({
    fullName: `${props.match.params.login}/${props.match.params.repo}`,
  }),
  {
    onError: handleError,
  }
)(RepoPage)
