const express = require('express');
const validate = require('express-validation');
const todoscontrol = require('./todos.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/users - Get list of users */
  .get(todoscontrol.getAllTasks)

  /** POST /api/users - Create new user */
  .post(todoscontrol.create);