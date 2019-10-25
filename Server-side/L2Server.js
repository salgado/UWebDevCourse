// Express to run server routes
const express = require('express');

// Star an instance of the app
const app = express();

// Dependencies
const bodyParser = require('body-parser')
    // Middleware
    // Configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('demo'));

const port = 8000;
// Spin up the server
const server = app.listen(port, listening);

// Callback to debug
function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}