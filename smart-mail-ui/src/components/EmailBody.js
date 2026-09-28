import React from "react";

export default function EmailBody({ body }) {
  return (
    <div className="email-content">
      <div className="mb-3">
        <label htmlFor="body" className="fw-semibold mb-2">
          Body:
        </label>
        <textarea
          readOnly
          className="form-control generated-body"
          rows="8"
          id="body"
          value={body}
        ></textarea>
      </div>
    </div>
  );
}
