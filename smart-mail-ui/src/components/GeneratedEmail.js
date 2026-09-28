import React from "react";
import EmailHeader from "./EmailHeader";
import EmailBody from "./EmailBody";

export default function GeneratedEmail({ generatedMailData }) {
  return (
    <div className="generated-email-card">
      <div className="card-header bg-white border-0 pt-4 px-4">
        <h5 className="fw-bold mb-1">
          <i className="bi bi-envelope-check-fill text-success me-2"></i>
          Generated Email
        </h5>

        <small className="text-secondary">
          Your AI-generated email is ready
        </small>
      </div>

      <EmailHeader subject={generatedMailData.subject} />

      <EmailBody body={generatedMailData.body} />
    </div>
  );
}
