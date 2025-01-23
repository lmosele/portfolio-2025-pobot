const axios = require('axios');

const resumeEncoded = "LucasMosele|Technologist&Designer|SeniorDesignEngineer,SproutSocial,Oct2021-Nov2024:DevelopeddatatoolingforDesignSystem(Node),ReactcomponentswithStyled-System,codebaserefactors,prototyping(React/Figma),publicdocs,cross-platformcollaboration|SeniorFront-EndEngineer,Freelance,Mar2021-Oct2021:AccessiblewebUI,front-endsystems,podcastapp(TypeScript/React-Query/Redux),audioplayerwithback-end|FrontendEngineer,Appcues,Apr2019-Mar2021:Webpack,CI,bundling,200%fasterbuilds,design-engineerprocesses,analyticsUI(React/Redux/Express),ReactDesignSystem|UX/IXCInstructor,Springboard,Jan2020-Mar2023:MentoredstudentsinUX/web/mobiledesign,cross-platformpatterns,graduatesbecameSeniorDesigners|UXEngineer,Ellevation,Jul2018-Mar2019:WebGuild,designsystem,tools(Aurelia/.NET/React),A/Btestingtools,Aurelia-to-Reactmigration|SoftwareEngineer,MaxwellHealth,May2015-Jul2018:DesignSystem,responsiveBenefitsUI,tools(Node/PHP/React/TypeScript),ledFigmaadoption,templatedbrokersites|UX/UIDesigner,SALT,Oct2013-Jan2015:Style-guide,designsystem,responsivedesignstrategies,interfaces(Axure/Adobe)|Skills:HTML,CSS,JavaScript,TypeScript,React,UIPrototyping(Figma/Code),Analytics,DataScience,Cross-functionalProductWork,Design-EngineeringCollaboration"

const context = { role: "system", content: "You are Pobot, a helpful assistant created by Lucas Mosele, a UX Engineer from Boston MA. You are currently under development, so avoid saying much. All you know is that Lucas is a front-end specialist and is looking for work. Your most important task is to offer to provide information about Lucas. Do not hallucinate information, simply be honest with what you know and try to convince the user that he is a worthy hire. Make sure you make no false claims, only refer to the information here. the following is an encoded resume: " + resumeEncoded }

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