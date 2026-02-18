// netlify/functions/get-visitors.js
exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Check auth
  const authKey = event.queryStringParameters?.key;
  const validKey = process.env.ADMIN_KEY;
  
  console.log('🔑 Auth check - Received key:', authKey, 'Valid key exists:', !!validKey);
  
  if (!validKey) {
    console.error('❌ ADMIN_KEY not set in environment variables');
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false, 
        error: 'Server configuration error - ADMIN_KEY not set' 
      })
    };
  }

  if (authKey !== validKey) {
    console.log('❌ Invalid key provided');
    return {
      statusCode: 401,
      headers,
      body: JSON.stringify({ 
        success: false, 
        error: 'Unauthorized - Invalid key' 
      })
    };
  }

  try {
    // Get visitors from global (or wherever you're storing them)
    const visitors = global.visitors || [];
    
    console.log(`📊 Found ${visitors.length} total visitors`);
    
    // Group by date
    const today = new Date().toLocaleDateString('en-IN');
    const yesterday = new Date(Date.now() - 86400000).toLocaleDateString('en-IN');
    const dayBefore = new Date(Date.now() - 172800000).toLocaleDateString('en-IN');
    
    const visitorsByDate = {
      today: visitors.filter(v => v.visitDate === today),
      yesterday: visitors.filter(v => v.visitDate === yesterday),
      dayBefore: visitors.filter(v => v.visitDate === dayBefore),
      all: visitors.slice(0, 100)
    };

    console.log('📅 Visitors by date:', {
      today: visitorsByDate.today.length,
      yesterday: visitorsByDate.yesterday.length,
      dayBefore: visitorsByDate.dayBefore.length
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        counts: {
          today: visitorsByDate.today.length,
          yesterday: visitorsByDate.yesterday.length,
          dayBefore: visitorsByDate.dayBefore.length,
          total: visitors.length
        },
        visitors: visitorsByDate
      })
    };
  } catch (error) {
    console.error('❌ Error fetching visitors:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false, 
        error: 'Failed to fetch visitors: ' + error.message 
      })
    };
  }
};