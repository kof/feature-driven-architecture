import pick from 'lodash/pick'
import {
  LOAD,
  HANDLE_RESPONSE,
  HANDLE_NEXT_RESPONSE,
  HANDLE_ERROR,
  LOAD_NEXT,
} from './actionTypes'

const defaultState = {
  starred: [],
  status: 'initial',
}

const mapResult = data => ({
  repo: pick(data, 'name', 'fullName', 'description'),
  owner: {
    login: data.owner.login,
  },
})

const states = {
  [LOAD]: state => ({
    ...defaultState,
    status: 'loading',
  }),
  [LOAD_NEXT]: state => ({
    ...state,
    status: 'loading',
  }),
  [HANDLE_RESPONSE]: (state, { result, ...rest }) => ({
    ...state,
    ...rest,
    starred: result.map(mapResult),
    status: 'loaded',
  }),
  [HANDLE_NEXT_RESPONSE]: (state, { result, ...rest }) => ({
    ...state,
    ...rest,
    starred: [...state.starred, ...result.map(mapResult)],
    status: 'loaded',
  }),
  [HANDLE_ERROR]: state => ({
    ...defaultState,
    status: 'error',
  }),
}

export default (state = defaultState, { type, payload } = {}) =>
  states[type] ? states[type](state, payload) : state
