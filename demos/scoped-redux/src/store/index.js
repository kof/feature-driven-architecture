import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import DevTools from '../shared/components/DevTools'
import { reducer as errorReducer } from '../features/error'
import { reducer as profileReducer } from '../features/profile'
import { reducer as repoReducer } from '../features/repo'
import { reducer as starredReposReducer } from '../features/starredRepos'
import { reducer as stargazersReducer } from '../features/stargazers'

const reducer = combineReducers({
  features: combineReducers({
    error: errorReducer,
    profile: profileReducer,
    repo: repoReducer,
    starredRepos: starredReposReducer,
    stargazers: stargazersReducer,
  }),
  pages: {},
})

export const configure = preloadedState => {
  const store = createStore(
    reducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, createLogger()),
      DevTools.instrument()
    )
  )

  return store
}
