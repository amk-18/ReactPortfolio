// src/components/Analytics/Analytics.js
import { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-YB1MTVFQW8'; // Your actual ID

export const useAnalytics = () => {
  useEffect(() => {
    const initAnalytics = () => {
      const consent = localStorage.getItem('cookieConsent');
      
      if (window.gtag && consent === 'true') {
        console.log('✅ Analytics: Tracking enabled for', GA_MEASUREMENT_ID);
        
        // Send pageview
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname
        });
        
        // Send custom event
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          send_to: GA_MEASUREMENT_ID
        });
      } else {
        console.log('⏳ Analytics: Waiting for consent or gtag not loaded');
      }
    };

    // Initialize after load
    if (document.readyState === 'complete') {
      setTimeout(initAnalytics, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(initAnalytics, 1000);
      });
    }
  }, []);
};