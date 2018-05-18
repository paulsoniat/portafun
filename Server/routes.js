const passport = require('passport');
const { Strategy } = require('passport-facebook');
const routeHelpers = require('./routehelpers.js');
const models = require('./database/models');
const path = require('path');
const watson = require('watson-developer-cloud');
const fs = require('fs');
const sequelize = require('sequelize');
const axios = require('axios');


odule.exports = (app) => {
    app.get('/*', isLoggedIn, (req, res) => {
        res.sendFile(path.join(__dirname, './public/index.html'));
    });
}