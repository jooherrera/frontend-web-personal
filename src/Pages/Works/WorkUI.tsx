import { useContext } from 'react'
import { WorkCard } from '../../Components/WorkCard/WorkCard'
import { appContext } from '../../context/context'
import './Works.css'

interface IWorkItem {
  link: string
  title: string
  imgPortada: string
  imgLogos: string[]
}

export const WorkUI = () => {
  const { state } = useContext(appContext)
  return (
    <>
      {state?.fetching && <> CARGANDO</>}
      {state?.success && (
        <div className="ContainerPage">
          {state.info.works.content.items.map((item: IWorkItem, idx: number) => (
            <WorkCard
              key={idx}
              link={item.link}
              title={item.title}
              imgPortada={item.imgPortada}
              imgLogo={item.imgLogos}
            />
          ))}
        </div>
      )}
    </>
  )
}
