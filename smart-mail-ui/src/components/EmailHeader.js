import React from "react";

export default function EmailHeader(props) {
  return (
    <div className="email-subject">
      <label className="fw-semibold mb-2">
        Subject
      </label>
        <div
          type="text"
          readOnly
          className="subject-value"
          id="subject"
        >{props.subject}</div>
    </div>
  );
}
