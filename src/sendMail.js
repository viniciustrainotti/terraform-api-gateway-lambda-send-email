var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-1" });
exports.handler = async function (event) {

    let body = {};
    if (event.body) {
        body = JSON.parse(event.body);
    }

    var params = {
        Destination: {
            ToAddresses: body.ToAddresses,
        },
        Message: {
            Body: {
                Text: { Data: "Test" },
            },

            Subject: { Data: "Test Email" },
        },
        Source: "no-reply@teste.com",
    };

    let response = {}
    try {
        let key = await ses.sendEmail(params).promise();
        console.log("MAIL SENT SUCCESSFULLY!!");
        response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "https://6tq2c9st45.execute-api.us-east-1.amazonaws.com",
                "Access-Control-Allow-Methods": "OPTIONS,POST"
            },
            body: JSON.stringify('Email enviado com sucesso!'),
        };
    } catch (e) {
        console.log("FAILURE IN SENDING MAIL!!", e);
        response = {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "https://6tq2c9st45.execute-api.us-east-1.amazonaws.com",
                "Access-Control-Allow-Methods": "OPTIONS,POST"
            },
            body: JSON.stringify(err),
        };

    }

    return response;
};
