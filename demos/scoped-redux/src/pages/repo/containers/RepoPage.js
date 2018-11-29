import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Repo } from '../../../features/repo'
import { Stargazers } from '../../../features/stargazers'

const propTypes = {
  fullName: PropTypes.string.isRequired,
}

const RepoPage = ({ fullName }) => (
  <Fragment>
    <Repo fullName={fullName} />
    <Stargazers fullName={fullName} />
  </Fragment>
)

RepoPage.propTypes = propTypes

export default connect((state, props) => ({
  fullName: `${props.match.params.login}/${props.match.params.repo}`,
}))(RepoPage)
