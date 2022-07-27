
db = require("../../index");
/**
 * Create new user
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.mobileNumber - The mobileNumber of user.
 * @returns {User}
 */
 function createTask(req, res, next) {
    // eslint-disable-next-line no-undef
   const task = new Task({
     name: req.body.name,
     description: req.body.description,
     done: req.body.done,
     priority: req.body.priority,
     completionDate: req.body.completionDate
   });

   db.none('insert into todos(name, description, done, priority, completionDate)' +
      'values(${Task.name}, ${Task.description}, ${task.done}, ${task.priority}, ${task.completionDate})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one todo'
        });
    })
    .catch(function (err) {
      return next(err);
    });
 }

 function getAllTasks(req, res, next) {
    // eslint-disable-next-line no-undef
    db.any('select * from todos')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL todos'
        });
    })
    .catch(function (err) {
      return next(err);
    });
 }
