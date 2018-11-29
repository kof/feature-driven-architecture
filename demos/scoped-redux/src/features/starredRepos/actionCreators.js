import * as api from '../../shared/api'
import { handle as showError } from '../../features/error'
import {
  LOAD,
  LOAD_NEXT,
  HANDLE_RESPONSE,
  HANDLE_NEXT_RESPONSE,
  HANDLE_ERROR,
} from './actionTypes'

const handleError = dispatch => error => {
  dispatch({ type: HANDLE_ERROR, payload: error })
  dispatch(showError(error))
}

export const load = ({ login }) => dispatch => {
  dispatch({ type: LOAD, payload: login })
  api
    .call(`users/${login}/starred`)
    .then(payload => {
      dispatch({ type: HANDLE_RESPONSE, payload })
    })
    .catch(handleError(dispatch))
}

export const loadNext = ({ url }) => dispatch => {
  dispatch({ type: LOAD_NEXT })
  api
    .call(url)
    .then(payload => {
      dispatch({ type: HANDLE_NEXT_RESPONSE, payload })
    })
    .catch(handleError(dispatch))
}
