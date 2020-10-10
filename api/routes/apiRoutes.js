'use strict';
module.exports = function(app) {
  var data = require('../controllers/apiController');

  // todoList Routes
  app.route('/patients')
    .get(data.list_all_Patients)
    .post(data.create_a_Patient);


  app.route('/patients/:pId')
    .get(data.read_a_Patient)
    .put(data.update_a_Patient)
    .delete(data.delete_a_Patient);
};