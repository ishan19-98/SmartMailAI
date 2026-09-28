import React from "react";

export default function About() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">About SmartMailAI</h1>
      <p className="lead text-center">
        SmartMailAI is an intelligent email generation platform designed to make
        communication faster, smarter, and more personalized.
      </p>

      <h3 className="mt-4">✨ What it does</h3>
      <ul>
        <li>Helps users draft professional emails in seconds.</li>
        <li>
          Adapts tone and style based on context (formal, friendly, apologetic,
          request-based).
        </li>
        <li>Reduces time spent on repetitive writing tasks.</li>
      </ul>

      <h3 className="mt-4">🛠 Powered by Modern Tech</h3>
      <ul>
        <li>
          <strong>React</strong> – for a dynamic and responsive user interface.
        </li>
        <li>
          <strong>Spring Boot</strong> – for a robust and scalable backend.
        </li>
        <li>
          <strong>Google Gemini AI</strong> – for advanced natural language
          generation.
        </li>
      </ul>

      <h3 className="mt-4">🌟 Why SmartMailAI?</h3>
      <ul>
        <li>
          <strong>Efficiency</strong>: Generate polished emails instantly.
        </li>
        <li>
          <strong>Consistency</strong>: Maintain a professional tone across all
          communications.
        </li>
        <li>
          <strong>Flexibility</strong>: Customize messages to suit different
          scenarios.
        </li>
      </ul>

      <p className="mt-4 text-center">
        <em>SmartMailAI — Your AI companion for smarter communication.</em>
      </p>
    </div>
  );
}
