const express = require('express');

app = express();

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

app.listen(8000, ()=>{
    console.log("Server is run on port :8000");
})


