import { IAction, IActionReducerObject, IState } from '../types/intex'

export const initState = {
  info: {},
  fetching: false,
  success: false,
  error: false,
}

const fetchingInfoReducerObject = (state: IState, action?: IAction): IActionReducerObject => ({
  FETCH_INFO_REQUEST: {
    ...state,
    fetching: true,
    error: false,
    success: false,
  },
  FETCH_INFO_SUCCESS: {
    ...state,
    info: action?.payload,
    fetching: false,
    success: true,
  },
  FETCH_INFO_FAILURE: {
    ...state,
    fetching: false,
    error: true,
  },
})

export const fetchingReducer = (state: IState, action: IAction) => {
  return fetchingInfoReducerObject(state, action)[action.type] || state
}
