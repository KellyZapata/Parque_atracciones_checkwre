const dotenv = require('dotenv').config();

module.exports = {
    MONGO_STRING: process.env.MONGO_STRING,
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
}