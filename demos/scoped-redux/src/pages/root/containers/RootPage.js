import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Search } from '../../../features/search'
import { Error, dismiss as dismissError } from '../../../features/error'

const propTypes = {
  search: PropTypes.string,
  onChangeSearch: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
}

class RootPageContainer extends Component {
  static propTypes = propTypes

  componentDidUpdate(prevProps) {
    if (prevProps.search !== this.props.search) {
      this.props.onChangeSearch()
    }
  }

  render() {
    const { search, onSearch } = this.props
    return (
      <Fragment>
        <Search value={search} onSearch={onSearch} />
        <Error />
      </Fragment>
    )
  }
}

export default connect(
  (state, { location, history }) => ({
    search: location.pathname.substr(1),
    onSearch: ({ value }) => {
      history.push(`/${value}`)
    },
  }),
  {
    onChangeSearch: dismissError,
  }
)(RootPageContainer)
