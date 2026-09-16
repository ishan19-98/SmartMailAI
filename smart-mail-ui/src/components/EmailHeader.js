import React from 'react'

export default function EmailHeader(props) {
  return (
    <div>
        <div className="mb-3">
        <label htmlFor="sender" className="form-label">
          Sender
        </label>
        <input type="text" className="form-control" id="sender" value={props.sender}/>
      </div>
      <div className="mb-3">
        <label htmlFor="receiver" className="form-label">
          Receiver
        </label>
        <input type="text" className="form-control" id="receiver" value={props.receiver} />
      </div>
      <div className="mb-3">
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <input type="text" className="form-control" id="subject" value={props.subject} />
      </div>
    </div>
  )
}
