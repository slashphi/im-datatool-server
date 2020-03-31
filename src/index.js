const express = require('express');
const expressGraphQL = require('express-graphql');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const moment = require('moment-timezone');

// to load .env file
const dotEnvConfig = dotenv.config();
if (dotEnvConfig.error) {
  throw dotEnvConfig.error;
}

moment.tz.setDefault('Europe/Vienna');

const { sequelize } = require('./models');
const { getWorldData } = require('./utils/api');
// Construct a schema, using GraphQL schema language
const schema = require('./graphql/schema');

// function to test if the connection is OK
sequelize.authenticate()
.then(() => console.log('Connection has been established successfully.'))
.catch(error => console.error('Unable to connect to the database:', error));

// to automatically synchronize all models
/*sequelize.sync({ force: true })
.then(() => console.log('All models were synchronized successfully.'));*/

const app = express();
const port = process.env.APP_PORT;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// enable cors for graphql endpoint
app.use('/graphql', expressGraphQL(
  () => ({
    schema: schema,
    graphiql: true,
  }),
));

app.listen(port, () => {
  console.log(`🚀 Local server ready at http://localhost:${port}`);
});

getWorldData(47);