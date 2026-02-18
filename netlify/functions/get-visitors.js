// netlify/functions/get-visitors.js
exports.handler = async (event, context) => {
  // Simple auth check - you can add a secret key
  const authKey = event.queryStringParameters?.key;
  const validKey = process.env.ADMIN_KEY || 'your-secret-key'; // Set in Netlify env vars
  
  if (authKey !== validKey) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Unauthorized' })
    };
  }

  try {
    // Return the stored visitors from global (or from a database)
    const visitors = global.visitors || [];
    
    // Group by date for yesterday and day before
    const today = new Date().toLocaleDateString('en-IN');
    const yesterday = new Date(Date.now() - 86400000).toLocaleDateString('en-IN');
    const dayBefore = new Date(Date.now() - 172800000).toLocaleDateString('en-IN');
    
    const visitorsByDate = {
      today: visitors.filter(v => v.visitDate === today),
      yesterday: visitors.filter(v => v.visitDate === yesterday),
      dayBefore: visitors.filter(v => v.visitDate === dayBefore),
      all: visitors.slice(0, 100) // Last 100 visitors
    };

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
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
    console.error('Error fetching visitors:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch visitors' })
    };
  }
};