import { DISMISS, HANDLE } from './actionTypes'

export const dismiss = () => dispatch => {
  dispatch({ type: DISMISS })
}

export const handle = error => dispatch => {
  dispatch({ type: HANDLE, payload: error })
}
