import React, { useState } from "react";

export default function EmailForm() {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [subject, setSubject] = useState("");
  const [tone, setTone] = useState("");
  const [context, setContext] = useState("");
  const [message, setMessage] = useState(false)
  const [status, setStatus] = useState("")

  const tones = ["Formal", "Friendly", "Apologetic", "Request-based"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      sender === "" ||
      receiver === "" ||
      subject === "" ||
      tone === "" ||
      context === ""
    ) {
      setStatus("Please fill the required details")
      setMessage(false);
    } else {
      setStatus("Form Submitted Successfully!")
      setMessage(true);
    }
  };

  const handleReset = () => {
    setSender("")
    setReceiver("")
    setTone("")
    setSubject("")
    setContext("")
    setMessage(false)
    setStatus("")
  };

  return (
    <>
      <form className="container mt-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="sender" className="form-label">
            Sender Name
          </label>
          <input
            type="text"
            className="form-control"
            id="sender"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
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
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
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
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tone" className="form-label">
            Tone
          </label>
          <select
            className="form-control"
            value={tone}
            id="tone"
            onChange={(e) => setTone(e.target.value)}
          >
            <option value="">Select Tone</option>
            {tones.map((tone) => (
              <option value={tone} key={tone}>
                {tone}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="context" className="form-label">
            Context
          </label>
          <textarea
            className="form-control"
            id="context"
            value={context}
            onChange={(e) => setContext(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary me-3">
          Generate Email
        </button>
        <button type="button" className="btn btn-primary" onClick={handleReset}>
          Reset
        </button>
        </div>
      </form>
      <p>{status}</p>
      {message && (
        <div>
          <p>Email Details</p>
          <p>From: {sender}</p>
          <p>To: {receiver}</p>
          <p>Subject: {subject}</p>
          <p>Tone: {tone}</p>
          <p>Context: {context}</p>
        </div>
      )}
    </>
  );
}
