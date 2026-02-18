// netlify/functions/track-visitor.js
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  console.log('🚀 Track Visitor Function Called');
  
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    
    // Get the REAL IP address (Netlify provides this)
    const ip = event.headers['x-nf-client-connection-ip'] || 
               event.headers['client-ip'] || 
               (event.headers['x-forwarded-for'] ? event.headers['x-forwarded-for'].split(',')[0].trim() : null) ||
               'Unknown';

    console.log('📍 Visitor IP:', ip);

    // Get location data from IP using ip-api.com (free, no API key)
    let locationData = {};
    try {
      // Using ip-api.com - free tier, 45 requests per minute from one IP
      // Fields: status, country, countryCode, region, regionName, city, zip, lat, lon, timezone, isp, org, as, mobile, proxy, hosting, query
      const geoResponse = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,mobile,proxy,hosting,query`);
      locationData = await geoResponse.json();
      
      if (locationData.status === 'fail') {
        console.log('⚠️ Geolocation failed:', locationData.message);
        locationData = { 
          country: 'Unknown', 
          city: 'Unknown',
          error: locationData.message 
        };
      } else {
        console.log('✅ Location found:', locationData.city, locationData.country);
      }
    } catch (geoError) {
      console.error('❌ Geolocation error:', geoError);
      locationData = { country: 'Unknown', city: 'Unknown' };
    }

    // Extract ALL visitor information
    const visitorInfo = {
      // Basic info
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
      timestamp: new Date().toISOString(),
      visitDate: new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' }),
      visitTime: new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' }),
      
      // IP and Location (ENHANCED!)
      ip: ip,
      location: {
        country: locationData.country || data.country || 'Unknown',
        countryCode: locationData.countryCode || 'Unknown',
        region: locationData.regionName || locationData.region || data.region || 'Unknown',
        city: locationData.city || data.city || 'Unknown',
        zip: locationData.zip || 'Unknown',
        latitude: locationData.lat || null,
        longitude: locationData.lon || null,
        timezone: locationData.timezone || data.timezone || 'Unknown',
        isp: locationData.isp || 'Unknown',
        org: locationData.org || 'Unknown',
        mobile: locationData.mobile || false,
        proxy: locationData.proxy || false,
        hosting: locationData.hosting || false
      },
      
      // Browser/Device info (from frontend)
      browser: {
        platform: data.browser?.platform || data.platform || 'Unknown',
        userAgent: data.browser?.userAgent || event.headers['user-agent'] || 'Unknown',
        language: data.browser?.language || data.language || 'Unknown',
        languages: data.browser?.languages || [],
        cookiesEnabled: data.browser?.cookiesEnabled || false,
        hardwareConcurrency: data.browser?.hardwareConcurrency || 'Unknown',
        deviceMemory: data.browser?.deviceMemory || 'Unknown',
        online: data.browser?.online || true,
        connection: data.browser?.connection || null
      },
      
      // Screen info (from frontend)
      screen: {
        width: data.screen?.width || data.screenWidth || 'Unknown',
        height: data.screen?.height || data.screenHeight || 'Unknown',
        colorDepth: data.screen?.colorDepth || 'Unknown',
        pixelDepth: data.screen?.pixelDepth || 'Unknown',
        viewportWidth: data.viewport?.width || 'Unknown',
        viewportHeight: data.viewport?.height || 'Unknown'
      },
      
      // Page info
      page: data.page || 'Unknown',
      referrer: data.referrer || event.headers['referer'] || 'Direct',
      
      // Headers info (fallback)
      headers: {
        acceptLanguage: event.headers['accept-language'] || 'Unknown',
        country: event.headers['x-country'] || 'Unknown',
        city: event.headers['x-city'] || 'Unknown'
      }
    };

    // Log the visitor data (you can see this in Netlify logs)
    console.log('🎯 NEW VISITOR:', JSON.stringify({
      id: visitorInfo.id,
      ip: visitorInfo.ip,
      location: `${visitorInfo.location.city}, ${visitorInfo.location.country}`,
      device: visitorInfo.browser.platform,
      page: visitorInfo.page,
      time: visitorInfo.visitTime,
      date: visitorInfo.visitDate
    }, null, 2));

    // For detailed log (uncomment to see everything)
    // console.log('📊 FULL VISITOR DATA:', JSON.stringify(visitorInfo, null, 2));

    // Optional: Store in memory (last 50 visitors)
    // Note: This resets when function cold starts, but useful for demo
    if (!global.visitors) {
      global.visitors = [];
    }
    global.visitors.unshift(visitorInfo);
    if (global.visitors.length > 50) global.visitors.pop();

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
        visitor: {
          id: visitorInfo.id,
          ip: visitorInfo.ip,
          location: visitorInfo.location,
          time: visitorInfo.visitTime,
          date: visitorInfo.visitDate
        }
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