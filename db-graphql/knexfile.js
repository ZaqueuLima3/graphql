// Update with your config settings.
const { connection } = require('./.env');
module.exports = {
  client: 'pg',
  version: '7.12',
  connection: {
    port: 5432,
    host : '127.0.0.1',
    user : 'postgres',
    password : 'postgres',
    database : 'exercicios'
  }
};
