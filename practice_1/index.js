const express = require('express');

const app = express();

// GET
app.get('/', (req, res)=>{
    res.send("Home page route")
});

// POST
app.post('/about', (req, res)=>{
    res.send("About page route")
})

//PUT
app.put('/contact', (req, res)=>{
    res.send("Contact page route")
})

//DELETE
app.delete('/terms', (req, res)=>{
    res.send("Terms page route")
})

app.listen(8000, ()=>{
    console.log('Server is run on port localhost:80000');
})