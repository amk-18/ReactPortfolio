// src/components/Analytics/Analytics.js
import { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-YB1MTVFQW8';

export const useAnalytics = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      const consent = localStorage.getItem('cookieConsent');
      
      if (consent === 'true') {
        try {
          // Fix: Access screen through window object
          const screenInfo = {
            width: window.screen.width,           // Fixed
            height: window.screen.height,         // Fixed
            colorDepth: window.screen.colorDepth, // Fixed
            pixelDepth: window.screen.pixelDepth  // Fixed
          };

          const visitorData = {
            screen: screenInfo,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            cookiesEnabled: navigator.cookieEnabled,
            javaEnabled: navigator.javaEnabled ? navigator.javaEnabled() : false,
            online: navigator.onLine,
            platform: navigator.platform,
            // Add Google Analytics data if available
            gaClientId: await getGAClientId() // Added await here since getGAClientId returns a promise
          };

          // Send to Netlify function
          await fetch('/.netlify/functions/track-visitor', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(visitorData)
          });

          console.log('✅ Visitor data sent to server');
        } catch (error) {
          console.log('❌ Visitor tracking failed:', error);
        }
      }
    };

    // Get Google Analytics Client ID
    const getGAClientId = () => {
      if (window.gtag && typeof window.gtag === 'function') {
        return new Promise((resolve) => {
          try {
            window.gtag('get', GA_MEASUREMENT_ID, 'client_id', (clientId) => {
              resolve(clientId);
            });
          } catch (error) {
            console.log('Error getting GA client ID:', error);
            resolve(null);
          }
        });
      }
      return Promise.resolve(null);
    };

    // Track when user accepts cookies
    const checkAndTrack = () => {
      const consent = localStorage.getItem('cookieConsent');
      if (consent === 'true') {
        // Small delay to ensure GA is loaded
        setTimeout(trackVisitor, 1000);
      }
    };

    // Check immediately and set up storage listener
    checkAndTrack();
    
    // Listen for storage changes (when user accepts cookies)
    const handleStorageChange = (e) => {
      if (e.key === 'cookieConsent' && e.newValue === 'true') {
        checkAndTrack();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also check every 5 seconds for consent changes (fallback)
    const interval = setInterval(checkAndTrack, 5000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);
};