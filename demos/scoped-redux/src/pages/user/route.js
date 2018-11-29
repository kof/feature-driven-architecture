import React from 'react'
import UserPage from './containers/UserPage'
import { Route } from 'react-router-dom'

export default <Route path="/:login" exact component={UserPage} />
