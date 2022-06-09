// configure access to env variables
const dotenv = require('dotenv');
dotenv.config();

const env = process.env;

const config = {
  db: { 
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    port: 5432, 
    ssl: {
      rejectUnauthorized: false,
    }
  },
  offset: 0,
  captcha: {
    // get secret key from env file
    key: env.RECAPTCHA_SECRET_KEY
  }
};

module.exports = config;