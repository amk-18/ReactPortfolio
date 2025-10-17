// netlify/functions/track-visitor.js
exports.handler = async (event, context) => {
  console.log('🚀 Track Visitor Function Called');
  
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    
    // Extract visitor information
    const visitorInfo = {
      timestamp: new Date().toISOString(),
      ip: event.headers['x-nf-client-connection-ip'] || 
          event.headers['client-ip'] || 
          event.headers['x-forwarded-for'] || 
          'Unknown',
      userAgent: event.headers['user-agent'] || 'Unknown',
      referer: event.headers['referer'] || 'Direct',
      acceptLanguage: event.headers['accept-language'] || 'Unknown',
      country: event.headers['x-country'] || 'Unknown',
      city: event.headers['x-city'] || 'Unknown',
      // Additional data from frontend
      screenWidth: data.screen?.width || 'Unknown',
      screenHeight: data.screen?.height || 'Unknown',
      timezone: data.timezone || 'Unknown'
    };

    // Log the visitor data (you can see this in Netlify logs)
    console.log('🎯 NEW VISITOR:', JSON.stringify(visitorInfo, null, 2));

    // For now, we'll just log the data. 
    // Later we can add email functionality.

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Visitor tracked successfully',
        visitor: visitorInfo 
      })
    };
  } catch (error) {
    console.error('❌ Tracking error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to track visitor' })
    };
  }
};