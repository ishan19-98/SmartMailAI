import React from "react";

export default function EmailBody({ body }) {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Body:
        </label>
        <textarea
          readOnly
          className="form-control"
          rows="8"
          id="body"
          value={body}
        ></textarea>
      </div>
    </div>
  );
}
