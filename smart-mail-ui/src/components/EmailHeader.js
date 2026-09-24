import React from 'react'

export default function EmailHeader(props) {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <input type="text" readOnly className="form-control" id="subject" value={props.subject} />
      </div>
    </div>
  )
}
