import React from "react";
import "../static/guessErrorModal.css";

export default function GuessErrorModal({ errorMessage }) {
  return (
    <div className="error-modal-content">
      <p className="error-message">{errorMessage}</p>
    </div>
  );
}
