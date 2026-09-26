import React, { useEffect, useState } from "react";

export default function EmailForm({ sendData }) {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [subject, setSubject] = useState("");
  const [tone, setTone] = useState("");
  const [context, setContext] = useState("");
  const [status, setStatus] = useState("");

  const [error, setError] = useState("");

  const [charCount, setCharCount] = useState(0);
  const [loading, setLoading] = useState(false);


  const tones = ["Formal", "Friendly", "Apologetic", "Request-based"];

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setStatus('')
    if (
      sender === "" ||
      receiver === "" ||
      subject === "" ||
      tone === "" ||
      context === ""
    ) {
      setStatus("Please fill the required details");
    } else {
      setLoading(true);

      let request = JSON.stringify({
        senderName: sender,
        receiverName: receiver,
        subject: subject,
        context: context,
        tone: tone,
      });

      try {
        const res = await fetch("http://localhost:8080/mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: request,
        });

        if (!res.ok)
          throw new Error("❌ Unable to generate email. Please try again.");

        const genMail = await res.json();
        sendData(genMail);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
  }

  const handleReset = () => {
    setSender("");
    setReceiver("");
    setTone("");
    setSubject("");
    setContext("");
    setStatus("");
    setLoading(false);
    setError("");
    sendData(null);
  };

  useEffect(() => {
    setCharCount(context.length);
  }, [context]);

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
        <p>Characters: {charCount}</p>
        <div>
          <button
            type="submit"
            className="btn btn-primary me-3"
            disabled={loading}
          >
            {loading ? `Generating...` : `Generate Email`}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
      <p className="mt-5 text-center">{status}</p>
      {error && <p className="text-center">{error}</p>}
    </>
  );
}
