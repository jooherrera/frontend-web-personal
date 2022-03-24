import { Link } from 'react-router-dom'
import { CvUI } from '../../Components/CV/CvUI'

export const ResumeUI = () => {
  return (
    <>
      <div className="ContainerPage">
        <iframe src="/cv" className="ResumeFrame"></iframe>

        <a href="/cv" target="_blank">
          <button className="btn btn-outline-light ">Open in new tab</button>
        </a>
      </div>
    </>
  )
}
