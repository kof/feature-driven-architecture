import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { LOADING_STATES } from '../../../shared/constants'
import List from '../../../shared/components/List'
import Profile from '../../../shared/components/Profile'
import Title from '../renderers/Title'
import * as actions from '../actionCreators'
import { selectStargazers } from '../selectors'

const propTypes = {
  fullName: PropTypes.string.isRequired,
  status: PropTypes.oneOf(LOADING_STATES).isRequired,
  onLoad: PropTypes.func.isRequired,
  onLoadNext: PropTypes.func.isRequired,
  nextPageUrl: PropTypes.string,
  lastPageUrl: PropTypes.string,
  users: PropTypes.array.isRequired,
}

class StargazersContainer extends Component {
  static propTypes = propTypes

  componentDidMount() {
    this.load()
  }

  componentDidUpdate(prevProps) {
    this.load(prevProps.fullName)
  }

  load(prevfullName) {
    const { fullName, onLoad, status } = this.props

    if (fullName && fullName !== prevfullName && status !== 'loading') {
      onLoad({ fullName })
    }
  }

  render() {
    const {
      fullName,
      users,
      onLoadNext,
      nextPageUrl,
      lastPageUrl,
      status,
    } = this.props

    return (
      <Fragment>
        <Title />
        <List
          renderItem={props => <Profile {...props} key={props.login} />}
          items={users}
          onLoadNext={onLoadNext}
          loadingLabel={`Loading ${fullName}'s stargazers...`}
          nextPageUrl={nextPageUrl}
          lastPageUrl={lastPageUrl}
          status={status}
        />
      </Fragment>
    )
  }
}

export default connect(
  selectStargazers,
  {
    onLoad: actions.load,
    onLoadNext: actions.loadNext,
  }
)(StargazersContainer)
