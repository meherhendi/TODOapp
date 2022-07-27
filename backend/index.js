const mongoose = require('mongoose');
const util = require('util');

// config should be imported before importing any other file
const config = require('./config/config');
const app = require('./config/express');

const debug = require('debug')('express-mongoose-es6-rest-api:index');

const pgp = require('pg-promise')();
// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

// connect to mysql db

const db = pgp('postgres://bobsql:mypasswordbob@localhost:5432/todoDatabase');

db.one('SELECT $1 AS value', 123)
  .then(() => {
    // console.log('DATA:', data.value);
    console.log('Connected to POSTGRESQL Database')
  })
  .catch((error) => {
    console.log('ERROR:', error);
  });

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  // listen on port config.port
  app.listen(config.port, () => {
    console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
  });
}

module.exports = app;
module.exports = db;
