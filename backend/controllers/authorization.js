const appConfig = require('../config/app');

const getAuthorization = {
    login: (req, res) => {
        const authorizationUrl = `${appConfig.authorizationHost}/authorize?response_type=code&client_id=${appConfig.clientID}&redirect_uri=${encodeURIComponent(appConfig.redirectUri)}&state=1234&scope=openid%20profile%20email`;
        console.log(`Authorization url from the auth-controller ${authorizationUrl}`);
        res.redirect(authorizationUrl);
    },
    callback: async (req, res) => {
        const response = await fetch(`${appConfig.authorizationHost}/oauth/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: "authorization_code",
                client_id: appConfig.clientID,
                client_secret: appConfig.clientSecret,
                redirect_uri: appConfig.redirectUri,
                scope: "openid profile email",
                code: req.query.code,
            }),
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);

        res.json(jsonResponse);
    },
}

module.exports = getAuthorization;