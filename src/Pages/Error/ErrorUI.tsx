import { Error } from './index'
import './Error.css'

export const ErrorUI = () => {
  const { onBack } = Error()
  return (
    <>
      <div className="ErrorPage">
        <button type="button" className="btn btn-outline-dark" onClick={onBack}>
          Back
        </button>
      </div>
    </>
  )
}
