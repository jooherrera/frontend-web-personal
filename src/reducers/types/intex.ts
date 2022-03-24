export interface IState {
  info?: any
  fetching?: boolean
  success?: boolean
  error?: boolean
}

export enum ActionType {
  FETCH_INFO_REQUEST = 'FETCH_INFO_REQUEST',
  FETCH_INFO_SUCCESS = 'FETCH_INFO_SUCCESS',
  FETCH_INFO_FAILURE = 'FETCH_INFO_FAILURE',
}

export interface IActionReducerObject {
  FETCH_INFO_REQUEST: IState
  FETCH_INFO_SUCCESS: IState
  FETCH_INFO_FAILURE: IState
}

export interface IAction {
  type: ActionType
  payload?: IState
}
