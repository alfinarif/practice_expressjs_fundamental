const express = require('express');
const bodyParser = require('body-parser');
const multerInstent = require('multer');

const multer = multerInstent();

app = express();
app.use(bodyParser.json());
app.use(multer.array());
app.use(express.static('public'));

// ************* Work with Response Start ********************
// GET **************************************
app.get('/', (req, res)=>{
    // Simple String response using send() and end() methods;
    res.send("Home page loaded");
    // res.end("Home page loaded");
})

// Modify response status code
app.get('/statusCode', (req, res)=>{
    res.status(401).end("UnAuthorized");
})

// Json response
const myObject = [
    {
        name: "Alfin Arif",
        age: 25,
        branch: "Cumilla",
        team: "Web Dev"
    },
    {
        name: "Tajul Islam",
        age: 23,
        branch: "Dhaka",
        team: "Backend"
    }
]
app.get('/json', (req, res)=>{
    res.json(myObject);
})

// Download response
app.get('/download', (req, res)=>{
    res.download('./upload/img.jpg');
})

// response Redirenct ***
app.get('/bangladesh', (req, res)=>{
    res.redirect('/saudi');
})
app.get('/saudi', (req, res)=>{
    res.send('Hello saudi')
})

// Response Header
app.get('/resHeader', (req, res)=>{
    res.append("Name", "Alfin Arif")
    res.append("City", "Cumilla")
    res.send('Hello world');
    res.status(201).end();

})

// Response set Cookies
app.get('/cookies', (req, res)=>{
    res.cookie('name', 'Alfin');
    res.cookie('city', 'Cumilla');
    res.end("Cookie set successfully");

})

// Response clear Cookies
app.get('/cookie_clear', (req, res)=>{
    res.clearCookie('name');
    res.clearCookie('city');
    res.end("Cookie clear success")

})


// POST **************************************
app.post('/about', (req, res)=>{
    // Simple String response using send() and end() methods;
    res.send("About page loaded");
    // res.end("About page loaded");
})
// PUT **************************************
app.put('/contact', (req, res)=>{
    // Simple String response using send() and end() methods;
    res.send("Contact page loaded");
    // res.end("Contact page loaded");
})
// DELETE **************************************
app.delete('/terms', (req, res)=>{
    // Simple String response using send() and end() methods;
    res.send("Terms and Condition page loaded");
    // res.end("Terms and Condition page loaded");
})

// ************* Work with Response End ********************



// ************* Work with Request Handler Start ********************
// GET REQUEST
app.get('/req_1', (req, res)=>{
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.end(firstName + " " + lastName);
})

app.get('/req_2', (req, res)=>{
    let firstName = req.header('firstName');
    let lastName = req.header('lastName');
    res.end(firstName + ' ' + lastName + ' user: ' + req.header('User-Agent')
    );
})


// POST REQUEST
app.post('/req_3', (req, res)=>{
    res.send('Simple post request');
})

// post request with url query
app.post('/req_4', (req, res)=>{
    let fname = req.query.fname;
    let lname = req.query.lname;
    res.end(fname +' '+ lname);

})

// header
app.post('/req_5', (req, res)=>{
    let username = req.header('username');
    let password  = req.header('password');

    res.end(`Username: ${username} and Password: ${password}`);

})

// JSON request handling
// const myJsonObject = [
//     {name: 'Alfin', city: 'Cumilla', team: 'DevOps'},
//     {name: 'Tajul', city: 'Dhaka', team: 'Frontend'},
//     {name: 'Sharif', city: 'Khulna', team: 'Backend'},
//     {name: 'Tafhim', city: 'Barisal', team: 'DevOps'},
// ]
app.post('/req_6', (req, res)=>{
    let jsonData = req.body;
    // let jsonString = JSON.stringify(jsonData);
    let name = jsonData['name'];
    let city = jsonData['city'];
    let team = jsonData['team'];

    let displayFormate = `Name: ${name}, City: ${city}, Team: ${team}`;
    res.send(displayFormate);

    // res.send(jsonString);
})

// Multipart form data handling using multer npm package;
app.post('/req_7', (req, res)=>{
    let jsonData = req.body;
    let jsonString = JSON.stringify(jsonData);
    res.send(jsonString);
})


// PUT REQUEST
// DELETE REQUEST




// ************* Work with Request End ********************


app.listen(8000, ()=>{
    console.log("Server is run on port :8000");
})


