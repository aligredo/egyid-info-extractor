var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var morgan = require('morgan')

// Middleware To Log All Incoming Requests
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));


var routes = require('./api/routes/routes');
routes(app);
  
  
app.listen(port);

console.log('EgyID Info Extractor Started On Port: ' + port);