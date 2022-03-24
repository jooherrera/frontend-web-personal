import React from 'react'

interface AlertProps {
  message: string
  type: string
  cb: () => void
}

export const Alert = ({ message, type, cb }: AlertProps) => {
  return (
    <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
      {message}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={cb}></button>
    </div>
  )
}
