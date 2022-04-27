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
};


module.exports = config;