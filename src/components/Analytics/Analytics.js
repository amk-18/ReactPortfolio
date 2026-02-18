// src/components/Analytics/Analytics.js
import { useEffect, useState } from 'react';

// Main Analytics tracking hook
export const useAnalytics = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      const consent = localStorage.getItem('cookieConsent');
      
      if (consent === 'true') {
        try {
          // Screen information
          const screenInfo = {
            width: window.screen.width,
            height: window.screen.height,
            colorDepth: window.screen.colorDepth,
            pixelDepth: window.screen.pixelDepth
          };

          // Browser and device information
          const browserInfo = {
            userAgent: navigator.userAgent,
            language: navigator.language,
            languages: navigator.languages,
            platform: navigator.platform,
            cookiesEnabled: navigator.cookieEnabled,
            doNotTrack: navigator.doNotTrack,
            hardwareConcurrency: navigator.hardwareConcurrency,
            maxTouchPoints: navigator.maxTouchPoints,
            deviceMemory: navigator.deviceMemory,
            online: navigator.onLine,
            connection: navigator.connection ? {
              effectiveType: navigator.connection.effectiveType,
              downlink: navigator.connection.downlink,
              rtt: navigator.connection.rtt,
              saveData: navigator.connection.saveData
            } : null
          };

          // Page and visit information
          const visitorData = {
            screen: screenInfo,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            browser: browserInfo,
            referrer: document.referrer || 'Direct',
            page: window.location.pathname,
            timestamp: new Date().toISOString()
          };

          // Send to Netlify function
          const response = await fetch('/.netlify/functions/track-visitor', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(visitorData)
          });

          const result = await response.json();
          
          if (result.success) {
            console.log('✅ Visitor data sent');
          }
        } catch (error) {
          console.log('❌ Visitor tracking failed:', error);
        }
      }
    };

    const checkAndTrack = () => {
      const consent = localStorage.getItem('cookieConsent');
      if (consent === 'true') {
        setTimeout(trackVisitor, 1000);
      }
    };

    checkAndTrack();
    
    const handleStorageChange = (e) => {
      if (e.key === 'cookieConsent' && e.newValue === 'true') {
        checkAndTrack();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    const interval = setInterval(checkAndTrack, 5000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);
};

// Visitor List component
const VisitorList = ({ visitors }) => (
  <div style={{
    background: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    {visitors.map((visitor, index) => (
      <div key={index} style={{
        padding: '15px',
        borderBottom: index < visitors.length - 1 ? '1px solid #eee' : 'none',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        gap: '15px',
        alignItems: 'center'
      }}>
        {/* Location Icon/Flag */}
        <div style={{
          width: '40px',
          height: '40px',
          background: '#f0f4ff',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px'
        }}>
          {visitor.location?.country === 'India' ? '🇮🇳' : '🌍'}
        </div>

        {/* Visitor Details */}
        <div>
          <div style={{ fontWeight: 600, marginBottom: '4px' }}>
            {visitor.location?.city || 'Unknown'}, {visitor.location?.country || 'Unknown'}
          </div>
          <div style={{ fontSize: '13px', color: '#666', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <span>🖥️ {visitor.browser?.platform || 'Unknown'}</span>
            <span>🌐 {visitor.ip}</span>
          </div>
          <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>
            📄 {visitor.page} • 🔗 {visitor.referrer || 'Direct'}
          </div>
        </div>

        {/* Time */}
        <div style={{ fontSize: '13px', color: '#666', textAlign: 'right' }}>
          <div>{visitor.visitTime}</div>
          <div style={{ fontSize: '11px', color: '#999' }}>{visitor.visitDate}</div>
        </div>
      </div>
    ))}
  </div>
);

// Main Viewer Component
export const VisitorViewer = () => {
  const [visitors, setVisitors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showViewer, setShowViewer] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [secretKey, setSecretKey] = useState('');

  const fetchVisitors = async () => {
    if (!secretKey) {
      setError('Please enter the secret key');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      console.log('🔍 Fetching visitors with key:', secretKey);
      
      const response = await fetch(`/.netlify/functions/get-visitors?key=${secretKey}`);
      console.log('📡 Response status:', response.status);
      
      const data = await response.json();
      console.log('📦 Response data:', data);
      
      if (data.success) {
        console.log('✅ Visitors data received:', data);
        setVisitors(data);
        setShowLogin(false);
      } else {
        console.log('❌ Failed response:', data);
        setError(data.error || 'Failed to fetch visitors');
      }
    } catch (err) {
      console.error('🔥 Error details:', err);
      setError('Error connecting to server: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setShowViewer(false);
    setVisitors(null);
    setShowLogin(true);
    setSecretKey('');
    setError('');
  };

  // SHORTCUT: Ctrl + Shift + Alt + R
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.altKey && e.key.toLowerCase() === 'r') {
        e.preventDefault();
        e.stopPropagation();
        console.log('📊 Opening analytics viewer');
        setShowViewer(true);
        setShowLogin(true);
        setVisitors(null);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Listen for openAnalytics event from header
  useEffect(() => {
    const handleOpenAnalytics = () => {
      console.log('📊 Opening analytics from header button');
      setShowViewer(true);
      setShowLogin(true);
      setVisitors(null);
    };
    
    window.addEventListener('openAnalytics', handleOpenAnalytics);
    
    return () => {
      window.removeEventListener('openAnalytics', handleOpenAnalytics);
    };
  }, []);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => {
          setShowViewer(true);
          setShowLogin(true);
          setVisitors(null);
        }}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          padding: '12px 24px',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
          zIndex: 9999,
          fontSize: '16px',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <span>📊</span>
        View Analytics
        <span style={{ 
          fontSize: '12px', 
          background: 'rgba(255,255,255,0.2)', 
          padding: '4px 8px', 
          borderRadius: '12px',
          marginLeft: '4px'
        }}>
          Ctrl+Shift+Alt+R
        </span>
      </button>

      {/* Modal Popup */}
      {showViewer && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000
          }} 
          onClick={handleClose}
        >
          <div 
            style={{
              background: 'white',
              borderRadius: '12px',
              width: '90%',
              maxWidth: '900px',
              maxHeight: '90vh',
              overflow: 'auto',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
            }} 
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{
              padding: '16px 20px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'sticky',
              top: 0
            }}>
              <h3 style={{ margin: 0, fontSize: '18px' }}>
                📊 Visitor Analytics - Yesterday vs Day Before
              </h3>
              <button 
                onClick={handleClose}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  color: 'white',
                  fontSize: '20px',
                  cursor: 'pointer',
                  width: '30px',
                  height: '30px',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.3)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div style={{
              padding: '20px',
              backgroundColor: '#f8f9fa'
            }}>
              {/* Show Login if showLogin is true */}
              {showLogin && (
                <div style={{
                  background: 'white',
                  padding: '20px',
                  borderRadius: '8px',
                  marginBottom: '20px'
                }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                    Enter Admin Key:
                  </label>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <input
                      type="password"
                      value={secretKey}
                      onChange={(e) => setSecretKey(e.target.value)}
                      placeholder="Enter your secret key"
                      style={{
                        flex: 1,
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '6px',
                        fontSize: '14px'
                      }}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          fetchVisitors();
                        }
                      }}
                      autoFocus
                    />
                    <button
                      onClick={fetchVisitors}
                      disabled={loading}
                      style={{
                        padding: '10px 20px',
                        background: '#667eea',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        opacity: loading ? 0.7 : 1,
                        transition: 'opacity 0.2s'
                      }}
                    >
                      {loading ? 'Loading...' : 'View Visitors'}
                    </button>
                  </div>
                  {error && (
                    <div style={{
                      marginTop: '10px',
                      padding: '10px',
                      background: '#fee',
                      color: '#c00',
                      borderRadius: '4px',
                      fontSize: '14px'
                    }}>
                      ❌ {error}
                    </div>
                  )}
                </div>
              )}

              {/* Visitor Display - only shown after successful login */}
              {!showLogin && visitors && (
                <>
                  {/* Summary Cards */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '15px',
                    marginBottom: '20px'
                  }}>
                    <div style={{
                      background: 'white',
                      padding: '20px',
                      borderRadius: '8px',
                      textAlign: 'center',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#667eea' }}>
                        {visitors.counts?.today || 0}
                      </div>
                      <div style={{ color: '#666', fontSize: '14px' }}>Today</div>
                    </div>
                    <div style={{
                      background: 'white',
                      padding: '20px',
                      borderRadius: '8px',
                      textAlign: 'center',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#f59e0b' }}>
                        {visitors.counts?.yesterday || 0}
                      </div>
                      <div style={{ color: '#666', fontSize: '14px' }}>Yesterday</div>
                    </div>
                    <div style={{
                      background: 'white',
                      padding: '20px',
                      borderRadius: '8px',
                      textAlign: 'center',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981' }}>
                        {visitors.counts?.dayBefore || 0}
                      </div>
                      <div style={{ color: '#666', fontSize: '14px' }}>Day Before</div>
                    </div>
                  </div>

                  {/* Yesterday's Visitors */}
                  {visitors.visitors?.yesterday?.length > 0 && (
                    <div style={{ marginBottom: '20px' }}>
                      <h4 style={{ 
                        margin: '0 0 10px 0',
                        color: '#f59e0b',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <span>📅 Yesterday ({visitors.visitors.yesterday.length} visitors)</span>
                      </h4>
                      <VisitorList visitors={visitors.visitors.yesterday} />
                    </div>
                  )}

                  {/* Day Before Yesterday's Visitors */}
                  {visitors.visitors?.dayBefore?.length > 0 && (
                    <div>
                      <h4 style={{ 
                        margin: '0 0 10px 0',
                        color: '#10b981',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <span>📅 Day Before ({visitors.visitors.dayBefore.length} visitors)</span>
                      </h4>
                      <VisitorList visitors={visitors.visitors.dayBefore} />
                    </div>
                  )}

                  {/* No visitors message */}
                  {(!visitors.visitors?.yesterday?.length && !visitors.visitors?.dayBefore?.length) && (
                    <div style={{
                      textAlign: 'center',
                      padding: '40px',
                      background: 'white',
                      borderRadius: '8px',
                      color: '#999'
                    }}>
                      No visitors in the last 2 days
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Footer */}
            <div style={{
              padding: '12px 20px',
              background: '#f1f1f1',
              borderTop: '1px solid #ddd',
              fontSize: '12px',
              color: '#666',
              display: 'flex',
              justifyContent: 'space-between',
              position: 'sticky',
              bottom: 0
            }}>
              <span>Press <strong>Ctrl+Shift+Alt+R</strong> to open</span>
              <span>📍 Shows yesterday vs day before</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Main Analytics component
const Analytics = () => {
  useAnalytics();
  return <VisitorViewer />;
};

export default Analytics;