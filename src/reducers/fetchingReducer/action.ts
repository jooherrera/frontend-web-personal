import { ActionType } from '../types/intex'

const onRequest = () => ({
  type: ActionType.FETCH_INFO_REQUEST,
})
const onSuccess = (payload: any) => ({
  type: ActionType.FETCH_INFO_SUCCESS,
  payload: payload,
})

const onError = () => ({
  type: ActionType.FETCH_INFO_FAILURE,
})

export const fetchingActionCreator = {
  onRequest,
  onSuccess,
  onError,
}
