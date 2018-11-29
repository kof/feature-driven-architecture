import * as api from '../../shared/api'
import { LOAD, HANDLE_RESPONSE, HANDLE_ERROR } from './actionTypes'

export const load = ({ login }) => dispatch => {
  dispatch({ type: LOAD, payload: login })

  return api
    .call(`users/${login}`)
    .then(({ result }) => {
      dispatch({ type: HANDLE_RESPONSE, payload: result })
    })
    .catch(error => {
      dispatch({ type: HANDLE_ERROR, payload: error })
      throw error
    })
}
