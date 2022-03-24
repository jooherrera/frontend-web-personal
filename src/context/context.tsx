import { createContext, FC, useEffect, useReducer } from 'react'
import { getData } from '../api/fetchAPI'
import { fetchingReducer, initState } from '../reducers/fetchingReducer'
import { fetchingActionCreator } from '../reducers/fetchingReducer/action'
import { IState } from '../reducers/types/intex'

interface IContext {
  state: IState
}

const appContext = createContext<Partial<IContext>>({})
const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(fetchingReducer, initState)
  const { onRequest, onError, onSuccess } = fetchingActionCreator

  async function fetchData() {
    try {
      dispatch(onRequest())
      const resp = await getData()

      dispatch(onSuccess(resp.data))
    } catch (error) {
      dispatch(onError())
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return <appContext.Provider value={{ state }}>{children}</appContext.Provider>
}

export { appContext, AppProvider }
