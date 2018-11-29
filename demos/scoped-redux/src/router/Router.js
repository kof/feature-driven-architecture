import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { route as rootRoute } from '../pages/root'
import { route as repoRoute } from '../pages/repo'
import { route as userRoute } from '../pages/user'

const Router = () => (
  <BrowserRouter>
    <Fragment>
      {rootRoute}
      {userRoute}
      {repoRoute}
    </Fragment>
  </BrowserRouter>
)

export default Router
