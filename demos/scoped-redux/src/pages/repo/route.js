import React from 'react'
import RepoPage from './containers/RepoPage'
import { Route } from 'react-router-dom'

export default <Route path="/:login/:repo" exact component={RepoPage} />
