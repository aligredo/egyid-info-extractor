'use strict';
module.exports = function(app) {
  var EgyIDController = require('../controllers/EgyIDController');

  // App Routes
  app.route('/api/is-valid-id-number/')
    .get(EgyIDController.isValidIDNumber);

  app.route('/api/extract-info-from-id/')
    .get(EgyIDController.extractInfoFromIDNumber);
};
