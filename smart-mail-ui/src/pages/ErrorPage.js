import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <div className="container text-center mt-5">
        <h1 className="display-4">404</h1>
        <p className="lead">Oops! The page you’re looking for doesn’t exist.</p>
        <p>Please check the URL or return to the homepage.</p>
        <Link to="/" className="btn btn-primary mt-3">
          Go Home
        </Link>
      </div>
    </div>
  );
}
