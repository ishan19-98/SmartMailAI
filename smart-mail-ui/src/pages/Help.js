import React from "react";

export default function Help() {
  return (
    <div className="container py-5">

      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">
          Help & Support
        </h1>

        <p className="text-secondary">
          Need assistance with SmartMailAI? This page will guide you
          through the basics and answer common questions.
        </p>
      </div>


      <div className="row g-4">

        {/* Getting Started */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4">

              <h4 className="fw-bold mb-3">
                🚀 Getting Started
              </h4>

              <ul className="mb-0">
                <li className="mb-2">
                  Fill in the form with sender, receiver, subject,
                  tone, and context.
                </li>

                <li>
                  Click <strong>Generate Email</strong> to instantly
                  create a draft.
                </li>
              </ul>

            </div>
          </div>
        </div>


        {/* FAQ */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4">

              <h4 className="fw-bold mb-3">
                ❓ Frequently Asked Questions
              </h4>

              <div className="accordion" id="faqAccordion">

                {/* Question 1 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqOne"
                    >
                      Can I change the tone of an email?
                    </button>
                  </h2>

                  <div
                    id="faqOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes. You can select from options like
                      <strong> Formal, Friendly, Apologetic,
                      </strong> or <strong>Request-based</strong>
                      in the form.
                    </div>
                  </div>
                </div>


                {/* Question 2 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqTwo"
                    >
                      What technologies power SmartMailAI?
                    </button>
                  </h2>

                  <div
                    id="faqTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      SmartMailAI uses <strong>React</strong> for the
                      user interface, <strong>Spring Boot</strong> for
                      the backend, and <strong>Google Gemini AI</strong>
                      for natural language generation.
                    </div>
                  </div>
                </div>


                {/* Question 3 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqThree"
                    >
                      What if I see an error?
                    </button>
                  </h2>

                  <div
                    id="faqThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Try refreshing the page. If the issue persists,
                      please contact our support team.
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>


        {/* Contact Support */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4">

              <h4 className="fw-bold mb-3">
                <i className="bi bi-envelope-fill text-success me-2"></i>
                Contact Support
              </h4>

              <p>
                If you need further help, please reach out to our
                support team at:
              </p>

              <a
                href="mailto:support@smartmailaitest.com"
                className="fw-semibold text-decoration-none"
              >
                support@smartmailaitest.com
              </a>

            </div>
          </div>
        </div>

      </div>


      {/* Footer */}
      <div className="text-center mt-5">
        <p className="fst-italic text-secondary">
          SmartMailAI — Making communication effortless.
        </p>
      </div>

    </div>
  );
}
