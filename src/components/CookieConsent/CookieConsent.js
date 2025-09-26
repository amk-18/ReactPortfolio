// src/components/CookieConsent/CookieConsent.js
import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
    // Enable analytics tracking
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent-banner">
      <div className="cookie-content">
        <p>
          We use cookies and analytics to improve your experience. 
          This data is anonymous and helps me understand how visitors use my portfolio.
        </p>
        <div className="cookie-buttons">
          <button onClick={acceptCookies} className="btn-accept">
            Accept
          </button>
          <button onClick={rejectCookies} className="btn-reject">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;