import React from "react";

export default function EmailForm() {
  return (
    <form className="container mt-5">
      <div className="mb-3">
        <label htmlFor="sender" className="form-label">
          Sender Name
        </label>
        <input
          type="text"
          className="form-control"
          id="sender"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="receiver" className="form-label">
          Receiver Name
        </label>
        <input
          type="text"
          className="form-control"
          id="receiver"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <input
          type="text"
          className="form-control"
          id="subject"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tone" className="form-label">
          Tone
        </label>
        <input
          type="text"
          className="form-control"
          id="tone"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="context" className="form-label">
          Context
        </label>
        <textarea
          type="textarea"
          className="form-control"
          id="context"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Generate Email
      </button>
    </form>
  );
}
