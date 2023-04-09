const axios = require("axios");

exports.handler = async function (event, context) {
  try {
    const targetUrl = "https://api.berri.ai" + event.path;
    const response = await axios.get(targetUrl, {
      headers: event.headers,
      params: event.queryStringParameters,
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
