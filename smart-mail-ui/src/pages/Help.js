import React from "react";

export default function Help() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Help & Support</h1>
      <p className="lead text-center">
        Need assistance with SmartMailAI? This page will guide you through the
        basics and answer common questions.
      </p>

      <h3 className="mt-4">🚀 Getting Started</h3>
      <ul>
        {/* <li>
          Go to the <strong>Login</strong> page and sign in.
        </li>
        <li>
          Navigate to the <strong>Dashboard</strong> to access email generation
          tools.
        </li> */}
        <li>
          Fill in the form with sender, receiver, subject, tone, and context.
        </li>
        <li>
          Click <strong>Generate Email</strong> to instantly create a draft.
        </li>
      </ul>

      <h3 className="mt-4">❓ Frequently Asked Questions</h3>
      <ul>
        <li>
          <strong>Can I change the tone of an email?</strong>
          Yes, select from options like Formal, Friendly, Apologetic, or
          Request-based in the form.
        </li>
        <li>
          <strong>What technologies power SmartMailAI?</strong>
          SmartMailAI uses React for the UI, Spring Boot for the backend, and
          Google Gemini AI for natural language generation.
        </li>
        <li>
          <strong>What if I see an error?</strong>
          Try refreshing the page. If the issue persists, contact support.
        </li>
      </ul>

      <h3 className="mt-4">📧 Contact Support</h3>
      <p>
        If you need further help, please reach out to our support team at 
        <a href="mailto:support@smartmailaitest.com">  support@smartmailaitest.com</a>
      </p>

      <p className="mt-4 text-center">
        <em>SmartMailAI — Making communication effortless.</em>
      </p>
    </div>
  );
}
