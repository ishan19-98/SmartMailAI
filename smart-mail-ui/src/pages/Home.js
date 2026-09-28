import React from "react";
import { useState } from "react";
import "../App.css";
import EmailForm from "../components/EmailForm";
import Footer from "../components/Footer";
import GeneratedEmail from "../components/GeneratedEmail";

export default function Home() {
  const [generatedMailData, setGeneratedMailData] = useState(null);

  const handleData = (genMail) => {
    setGeneratedMailData(genMail);
  };

  return (
    <div className="hero-section">
      <div className="container py-5">
        <div className="row g-4 align-items-start">
          {/* Left side - Email Form */}
          <div className="col-lg-7">
            <EmailForm sendData={handleData} />
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
