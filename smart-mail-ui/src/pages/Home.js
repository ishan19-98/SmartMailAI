import React from "react";
import "../App.css";
import EmailForm from "../components/EmailForm";
import GeneratedEmail from "../components/GeneratedEmail";
import useAppContext from "../context/useAppContext";

export default function Home() {

  const {generatedMailData}=useAppContext();

  return (
    <div className="hero-section">
      <div className="container py-5">
        <div className="row g-4 align-items-start">
          {/* Left side - Email Form */}
          <div className="col-lg-7">
            <EmailForm />
          </div>

          {/* Right side - Generated Email */}
          <div className="col-lg-5">
            {generatedMailData !== null ? (
              <GeneratedEmail generatedMailData={generatedMailData} />
            ) : (
              <div className="generated-placeholder">
                <i className="bi bi-envelope text-primary"></i>

                <h5 className="fw-semibold mt-3">No email generated yet</h5>

                <p className="text-secondary mb-0">
                  Fill in the form and click
                  <strong> Generate Email</strong>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
