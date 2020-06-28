module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    timezone: '+01:00',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    dialectOptions: {
      ssl: {
          rejectUnauthorized: true
      }
  }
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    use_env_variable: null,
    timezone: '+01:00',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    dialectOptions: {
      ssl: {
          rejectUnauthorized: true
      }
  }
  },
};