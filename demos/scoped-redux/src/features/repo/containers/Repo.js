import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { LOADING_STATES } from '../../../shared/constants'
import Repo from '../../../shared/components/Repo'
import * as actions from '../actionCreators'
import { selectRepo } from '../selectors'
import Loading from '../renderers/Loading'
import Empty from '../renderers/Empty'

const propTypes = {
  fullName: PropTypes.string.isRequired,
  status: PropTypes.oneOf(LOADING_STATES).isRequired,
  onLoad: PropTypes.func.isRequired,
  repo: PropTypes.shape(),
  owner: PropTypes.shape(),
}

class RepoContainer extends Component {
  static propTypes = propTypes

  componentDidMount() {
    this.load()
  }

  componentDidUpdate(prevProps) {
    this.load(prevProps.fullName)
  }

  load(prevFullName) {
    const { fullName, onLoad, status } = this.props
    if (fullName && fullName !== prevFullName && status !== 'loading') {
      onLoad({ fullName })
    }
  }

  render() {
    const { status, fullName, repo, owner } = this.props

    if (status === 'loading') {
      return <Loading fullName={fullName} />
    }

    if (status === 'loaded') {
      return <Repo repo={repo} owner={owner} />
    }

    return <Empty />
  }
}

export default connect(
  selectRepo,
  {
    onLoad: actions.load,
  }
)(RepoContainer)
