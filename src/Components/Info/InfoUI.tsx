import github from './github.svg'
import linkedin from './linkedin.svg'
import './Info.css'
import { Link } from 'react-router-dom'
import { saveAs } from 'file-saver'

export const InfoUI = () => {
  const onDownload = async () => {
    saveAs(`${process.env.REACT_APP_API}/download`, 'JoseHerrera-CV')
  }
  return (
    <>
      <div className="Info">
        <h1 className="Info-Title">Jose Herrera</h1>
        <div className="Info-Social">
          <span>
            <a href="https://github.com/jooherrera" target="_blank">
              <img src={github} alt="Github logo" width={50} />
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/herrera-jl/" target="_blank">
              <img src={linkedin} alt="Linkedin logo" width={50} />
            </a>
          </span>
        </div>
        <div className="Info-Links">
          <span onClick={onDownload}>Download CV</span>
        </div>
      </div>
    </>
  )
}
