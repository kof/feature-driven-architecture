import { DISMISS, HANDLE } from './actionTypes'

const defaultState = {}

const states = {
  [DISMISS]: () => defaultState,
  [HANDLE]: (state, payload) => ({
    message: payload.message,
  }),
}

export default (state = defaultState, { type, payload } = {}) =>
  states[type] ? states[type](state, payload) : state
