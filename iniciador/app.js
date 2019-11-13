var express = require('express');
var request = require('request');
var app = express();

app.get('/', function (req, res) {

    var bodyReq = { "ClientId": "d4Znzjlv8AmeHd9rCc6CzG5lSolyZmDX", "ResponseType": "code", "ResponseTypeToken": "false", "ResponseTypeCode": "true", "ResponseTypeIdToken": "false", "Scope": "openid payments", "Type": "payments", "RedirectUri": "http://localhost/", "RequestId": "5d6fbd543a6a1a000db7d0c4", "State": "s0001", "Nonce": "n00021", "ApplicationName": "PISP_Appv101", "ApplicationDesc": "", "ApplicationId": "af0ed0d1-f454-4445-86e7-edec278eeb16", "TppId": 12345 };


    //url: "http://localhost:9000/consentapp",
    // url: "https://apigwdsr.bci.cl/apis/internal/sandbox/v1/consentapp",
    options = {
        url: "https://apigwdsr.bci.cl/apis/internal/sandbox/v1/consentapp/authorize",
        method: 'POST',
        headers: {
        //    'Accept': 'application/json',
          //  'Accept-Charset': 'utf-8',
            'Content-Type': 'application/json'
        },
        body: bodyReq,
        followAllRedirects: true,
        followOriginalHttpMethod: true,
        json: true
    };
    console.log("entrooo");
    request(options, function (err, response, resbody) {
        //console.log("response.statusCode:" + response.statusCode);
        //console.log("errr" + JSON.stringify(err));
        //console.log("resbody" + JSON.stringify(resbody));
        if (!err) {
            res.status(response.statusCode);
           // res.setHeaders (response.headers);
            res.send(response.body)
            }

    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});