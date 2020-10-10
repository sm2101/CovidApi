var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
  Task = require('./api/models/apiModels'), //created model loading here
  bodyParser = require('body-parser'),
	url = process.env.DATABASEURL || "mongodb+srv://siddharth_mittal:xRXuP4c1wLL3aXrx@cluster0.2fgyy.azure.mongodb.net/covidDb?retryWrites=true&w=majority";
  // mongodb+srv://siddharth_mittal:xRXuP4c1wLL3aXrx@cluster0.2fgyy.azure.mongodb.net/covidDb?retryWrites=true&w=majority
// mongoose instance connection url connection
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/apiRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);