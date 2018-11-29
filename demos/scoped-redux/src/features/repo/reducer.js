import pick from 'lodash/pick'
import { LOAD, HANDLE_RESPONSE, HANDLE_ERROR } from './actionTypes'

const defaultState = {
  repo: null,
  owner: null,
  status: 'initial',
}

const states = {
  [LOAD]: state => ({
    ...defaultState,
    status: 'loading',
  }),
  [HANDLE_RESPONSE]: (state, repo) => ({
    ...state,
    repo: pick(repo, 'name', 'description'),
    owner: {
      login: repo.owner.login,
    },
    status: 'loaded',
  }),
  [HANDLE_ERROR]: state => ({
    ...defaultState,
    status: 'error',
  }),
}

export default (state = defaultState, { type, payload } = {}) =>
  states[type] ? states[type](state, payload) : state
