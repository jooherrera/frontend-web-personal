import { useState } from 'react'
import { sendMail } from '../../api/fetchAPI'
import { Alert } from '../../Components/Alert'
import './Contact.css'

export const ContactUI = () => {
  const [alertWindow, setAlertWindow] = useState(false)
  const [alertError, setAlertError] = useState(false)
  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const name = document.getElementById('name') as HTMLInputElement
    const mail = document.getElementById('mail') as HTMLInputElement
    const message = document.getElementById('message') as HTMLTextAreaElement

    if (!name.value || !mail.value || !message.value) {
      setAlertError(true)
      setAlertWindow(false)
      return null
    }

    const body = {
      name: name.value,
      mail: mail.value,
      message: message.value,
    }
    if (alertWindow) {
      console.log('no se puede')
      return
    }
    const resp = await sendMail(body)

    if (resp.status === 202) {
      console.log('Informacion recibida')
      setAlertWindow(true)
    }
  }

  const onClose = () => {
    setAlertWindow(false)
    setAlertError(false)
  }

  return (
    <>
      <div className="ContainerPage">
        <h2 className="ContainerPage-Title">Contact form</h2>

        <div id="liveAlertPlaceholder" className="alertPosition "></div>
        <form action="" className="ContainerPage-Form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" placeholder="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="mail" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="mail" placeholder="name@example.com" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea className="form-control comment" id="message" rows={6} required />
          </div>
          <hr />
          <div className="d-flex">
            <button className="btn btn-dark" type="submit" onClick={onSubmit} id="liveAlertBtn">
              Send
            </button>
            <div className="alertPosition">
              {alertWindow && <Alert message="Se ha enviado su mensaje" type="success" cb={onClose} />}
              {alertError && <Alert message="Falta información" type="danger" cb={onClose} />}
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
