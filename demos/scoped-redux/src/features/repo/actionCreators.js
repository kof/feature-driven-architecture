import * as api from '../../shared/api'
import { handle as handleError } from '../../features/error'
import { LOAD, HANDLE_RESPONSE, HANDLE_ERROR } from './actionTypes'

export const load = ({ fullName }) => dispatch => {
  dispatch({ type: LOAD, payload: fullName })

  api
    .call(`repos/${fullName}`)
    .then(({ result }) => {
      dispatch({ type: HANDLE_RESPONSE, payload: result })
    })
    .catch(error => {
      dispatch({ type: HANDLE_ERROR, payload: error })
      dispatch(handleError(error))
    })
}
