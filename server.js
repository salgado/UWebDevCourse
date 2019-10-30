/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
    /* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('WebAPI-Async'));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);

function listening() {
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};

// GET route
app.get('/all', sendData);

function sendData(request, response) {
    response.send(projectData);
};

// POST route
app.post('/add', function(request, response) {
    let data = request.body;
    console.log(data);
});

// POST an animal
const data = [];

app.post('/animal', addAnimal);

function addAnimal(req, res) {
    data.push(req.body);
    console.log(data);
};

// GET route
app.get('/animal', sendData);

function sendData(request, response) {
    response.send(projectData);
};








// ****************************** Fake Animal API ******************************

// Dummy Endpoint
const fakeData = {
    animal: 'lion',
    fact: 'lions are deadly'
}

app.get('/fakeAnimalData', getFakeData)

function getFakeData(req, res) {
    res.send(fakeData)
}

const animalData = [];

app.get('/all', getData)

function getData(req, res) {
    res.send(animalData)
    console.log(animalData);
}

// POST ROUTE
app.post('/addAnimal', addAnimal);

function addAnimal(req, res) {

    newEntry = {
        animal: req.body.animal,
        facts: req.body.fact,
        fav: req.body.fav
    }

    animalData.push(newEntry)
    res.send(animalData)
    console.log(animalData);
}