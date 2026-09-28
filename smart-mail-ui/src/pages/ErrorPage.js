import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-content">
        {/* Icon */}
        <div className="error-icon">
          <i className="bi bi-envelope-x-fill"></i>
        </div>

        {/* Error Code */}
        <h1 className="display-1 fw-bold text-primary">404</h1>

        {/* Message */}
        <h2 className="fw-bold">Page Not Found</h2>

        <p className="text-secondary mt-3">
          Oops! The page you're looking for doesn't exist or may have been
          moved.
        </p>

        {/* Back Home */}
        <Link to="/" className="btn btn-primary px-4 mt-3">
          <i className="bi bi-house-door-fill me-2"></i>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
