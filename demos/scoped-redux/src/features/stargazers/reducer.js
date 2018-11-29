import pick from 'lodash/pick'
import {
  LOAD,
  HANDLE_RESPONSE,
  HANDLE_NEXT_RESPONSE,
  HANDLE_ERROR,
  LOAD_NEXT,
} from './actionTypes'

const defaultState = {
  users: [],
  status: 'initial',
}

const mapResult = data => pick(data, 'login', 'avatarUrl')

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
    users: result.map(mapResult),
    status: 'loaded',
  }),
  [HANDLE_NEXT_RESPONSE]: (state, { result, ...rest }) => ({
    ...state,
    ...rest,
    users: [...state.users, ...result.map(mapResult)],
    status: 'loaded',
  }),
  [HANDLE_ERROR]: state => ({
    ...defaultState,
    status: 'error',
  }),
}

export default (state = defaultState, { type, payload } = {}) =>
  states[type] ? states[type](state, payload) : state
