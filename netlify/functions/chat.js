const axios = require('axios');

const context = { role: "system", content: "You are Pobot, a helpful assistant created by Lucas Mosele, a UX Engineer from Boston MA. You are currently under development, so avoid saying much. All you know is that Lucas is a front-end specialist and is looking for work." }

exports.handler = async function (event) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    if (!OPENAI_API_KEY) {
        return { statusCode: 500, body: JSON.stringify({ error: "OpenAI API key is missing" }) };
    }

    try {
        const { messages } = JSON.parse(event.body);

        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-4o-mini",
                messages: [context, ...messages],
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                    assistant_id: 'asst_rDHeaKI8rrPhALjVjWHyp9eD'
                },
            }
        );

        return {
            statusCode: 200,
            body: JSON.stringify(response.data.choices[0].message),
        };
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
        return {
            statusCode: error.response ? error.response.status : 500,
            body: JSON.stringify({ error: "An error occurred while processing your request" })
        };
    }
};