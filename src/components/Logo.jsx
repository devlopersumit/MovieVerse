import React from 'react';
import "../css/Logo.css";

function Logo() {
  return (
    <div className="logo">
      <img src="/logo.svg" alt="MoviesHunt Logo" className="logo-icon" />
      <span className="logo-text">MoviesHunt</span>
    </div>
  );
}

export default Logo; 