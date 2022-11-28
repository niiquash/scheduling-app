require('dotenv').config();

module.exports = {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    authorizationHost: process.env.AUTHORIZATION_HOST,
    redirectUri: process.env.REDIRECT_URI
}