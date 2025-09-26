// src/components/Analytics/Analytics.js
import { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-YB1MTVFQW8'; // Replace with your actual ID

export const useAnalytics = () => {
  useEffect(() => {
    // Check if gtag is available and user consented to cookies
    const consent = localStorage.getItem('cookieConsent');
    
    const trackPageView = () => {
      if (typeof window.gtag !== 'undefined' && consent === 'true') {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Track initial page view
    trackPageView();

    // Track subsequent page views using window.history
    const originalPushState = window.history.pushState;
    if (originalPushState) {
      window.history.pushState = function (...args) {
        originalPushState.apply(this, args);
        setTimeout(trackPageView, 100);
      };
    }

    const handlePopState = () => {
      setTimeout(trackPageView, 100);
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
      if (originalPushState) {
        window.history.pushState = originalPushState;
      }
    };
  }, []);
};