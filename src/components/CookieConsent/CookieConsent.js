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
    
    // Trigger storage event to notify Analytics component
    window.dispatchEvent(new Event('storage'));
    
    console.log('🍪 Cookies accepted - tracking enabled');
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
          🍪 We use cookies to understand how visitors use our portfolio. 
          This helps us improve your experience. No personal data is stored.
        </p>
        <div className="cookie-buttons">
          <button onClick={acceptCookies} className="btn-accept">
            Accept Tracking
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