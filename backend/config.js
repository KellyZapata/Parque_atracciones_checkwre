const dotenv = require('dotenv').config();

module.exports = {
    MONGO_STRING: process.env.MONGO_STRING,
    TOKEN_SECRET: process.env.TOKEN_SECRET
}