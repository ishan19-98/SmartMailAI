import React from "react";

export default function About() {
  return (
    <div className="container py-5">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">About SmartMailAI</h1>

        <p className="text-secondary">
          SmartMailAI is an intelligent email generation platform designed to
          make communication faster, smarter, and more personalized.
        </p>
      </div>

      {/* Information Cards */}
      <div className="row g-4">
        {/* What it does */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4">
              <h4 className="fw-bold mb-3">
                <i className="bi bi-stars text-primary me-2"></i>
                What it does
              </h4>

              <ul className="mb-0">
                <li className="mb-2">
                  Helps users draft professional emails in seconds.
                </li>

                <li className="mb-2">
                  Adapts tone and style based on context.
                </li>

                <li>Reduces time spent on repetitive writing tasks.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modern Technology */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4">
              <h4 className="fw-bold mb-3">
                <i className="bi bi-cpu-fill text-success me-2"></i>
                Powered by Modern Tech
              </h4>

              <ul className="mb-0">
                <li className="mb-2">
                  <strong>React</strong> – for a dynamic and responsive user
                  interface.
                </li>

                <li className="mb-2">
                  <strong>Spring Boot</strong> – for a robust and scalable
                  backend.
                </li>

                <li>
                  <strong>Google Gemini AI</strong> – for advanced natural
                  language generation.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why SmartMailAI */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4">
              <h4 className="fw-bold mb-3">
                <i className="bi bi-lightbulb-fill text-warning me-2"></i>
                Why SmartMailAI?
              </h4>

              <ul className="mb-0">
                <li className="mb-2">
                  <strong>Efficiency:</strong> Generate polished emails
                  instantly.
                </li>

                <li className="mb-2">
                  <strong>Consistency:</strong> Maintain a professional tone
                  across communications.
                </li>

                <li>
                  <strong>Flexibility:</strong> Customize messages for different
                  scenarios.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center mt-5">
        <p className="fst-italic text-secondary">
          SmartMailAI — Your AI companion for smarter communication.
        </p>
      </div>
    </div>
  );
}
