const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes");
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.use(express.json({ extended: false })); 
}

// Add routes, both API and view
app.use(routes);
//Require user routes
var Users = require('./Routes/api/user')

app.use('/', Users)
// // Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});