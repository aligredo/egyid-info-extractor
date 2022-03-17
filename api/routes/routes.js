'use strict';
module.exports = function(app) {
  var egyIDController = require('../controllers/egyIDController');

  // App Routes
  app.route('/api/is-valid-id-number/')
    .get(egyIDController.isValidIDNumber);

  app.route('/api/extract-info-from-id/')
    .get(egyIDController.extractInfoFromIDNumber);
};
