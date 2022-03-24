import { useContext } from 'react'
import { appContext } from '../../context/context'
import './About.css'

export const AboutUI = () => {
  const { state } = useContext(appContext)
  return (
    <>
      {state?.success && (
        <div className="ContainerPage AboutUI">
          <p className="AboutUI-Text">{state.info.about.content}</p>
        </div>
      )}
      {state?.fetching && <>CARGANDO</>}
    </>
  )
}
