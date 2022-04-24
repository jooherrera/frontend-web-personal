import cellPhoneIcon from './phone.svg'
import phoneIcon from './telephone-fill.svg'
import mapIcon from './geo-alt-fill.svg'
import worldIcon from './globe2.svg'
import linkedinIcon from './linkedin.svg'
import { useContext } from 'react'
import { appContext } from '../../context/context'

export const Contact = () => {
  const { state } = useContext(appContext)

  return (
    <>
      {state?.success && (
        <div className="Contact mt-2">
          <h3 className="Contact__Title">Contacto</h3>
          <div className="Contact__InfoContainer">
            <div className="Contact__Icons">
              <img src={phoneIcon} alt="phone icon" />
              <img src={cellPhoneIcon} alt="cellPhone icon" />
              <img src={mapIcon} alt="map icon" />
              <img src={worldIcon} alt="world icon" />
              <img src={linkedinIcon} alt="linkedin icon" />
            </div>
            <div className="Contact__Info">
              <h5>{state.info.resume.content.sectionContact.phone}</h5>
              <h5>{state.info.resume.content.sectionContact.mail}</h5>
              <h5>{state.info.resume.content.sectionContact.city}</h5>
              <h5>{state.info.resume.content.sectionContact.website}</h5>
              <h5>{state.info.resume.content.sectionContact.linkedin}</h5>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
