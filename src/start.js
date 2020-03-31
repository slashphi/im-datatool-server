const dotenv = require('dotenv');

// to load .env file
const dotEnvConfig = dotenv.config();
if (dotEnvConfig.error) {
  throw dotEnvConfig.error;
}

const { sequelize } = require('./models');

// function to test if the connection is OK
sequelize.authenticate()
.then(() => console.log('Connection has been established successfully.'))
.catch(error => console.error('Unable to connect to the database:', error));

// to automatically synchronize all models
sequelize.sync({ force: true })
.then(() => console.log('All models were synchronized successfully.'));