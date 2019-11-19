// FAKE API EXAMPLE
// let baseURL = 'http://api.animalinfo.org/data/?animal='
// let apiKey = '&appid=9f15e45060...';
let animal = null;
// const newAnimal = document.getElementById('animal').value;

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    const fav = document.getElementById('fav').value;

    // Faking an API call
    getAnimal('/fakeAnimalData')
        // New Syntax!
        .then(function(data) {
            // Add data
            console.log(data);
            postData('/addAnimal', { animal: data.animal, fact: data.fact, fav: fav });

            updateUI();
        })
}

/* Function to POST data */
const postData = async(url = '', data = {}) => {
    console.log(data)
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}


const getAnimal = async(url) => {
    const res = await fetch(url);
    try {

        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("error", error);
        // Handle the error
    }
}

const updateUI = async() => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        document.getElementById('animalName').innerHTML = allData[0].animal;
        document.getElementById('animalFact').innerHTML = allData[0].facts;
        document.getElementById('animalFav').innerHTML = allData[0].fav;

    } catch (error) {
        console.log("error", error);
    }
}