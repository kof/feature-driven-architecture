import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { LOADING_STATES } from '../../../shared/constants'
import Profile from '../../../shared/components/Profile'
import * as actions from '../actionCreators'
import { selectProfile } from '../selectors'
import Loading from '../renderers/Loading'
import Empty from '../renderers/Empty'
import Title from '../renderers/Title'

const propTypes = {
  login: PropTypes.string.isRequired,
  status: PropTypes.oneOf(LOADING_STATES).isRequired,
  onLoad: PropTypes.func.isRequired,
  user: PropTypes.shape(),
}

class ProfileContainer extends Component {
  static propTypes = propTypes

  componentDidMount() {
    this.load()
  }

  componentDidUpdate(prevProps) {
    this.load(prevProps.login)
  }

  load(prevLogin) {
    const { login, onLoad, status } = this.props
    if (login && login !== prevLogin && status !== 'loading') {
      onLoad({ login })
    }
  }

  render() {
    const { status, login, user } = this.props

    return (
      <Fragment>
        <Title />
        {status === 'loading' && <Loading login={login} />}
        {status === 'loaded' && <Profile {...user} />}
        {status === 'initial' && <Empty />}
      </Fragment>
    )
  }
}

export default connect(
  selectProfile,
  {
    onLoad: actions.load,
  }
)(ProfileContainer)
