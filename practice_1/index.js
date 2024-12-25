const express = require('express');

app = express();

// GET
app.get('/', (req, res)=>{
    // Simple String response using send() and end() methods;
    res.send("Home page loaded");
    // res.end("Home page loaded");
})
// POST
app.post('/about', (req, res)=>{
    // Simple String response using send() and end() methods;
    res.send("About page loaded");
    // res.end("About page loaded");
})
// PUT
app.put('/contact', (req, res)=>{
    // Simple String response using send() and end() methods;
    res.send("Contact page loaded");
    // res.end("Contact page loaded");
})
// DELETE
app.delete('/terms', (req, res)=>{
    // Simple String response using send() and end() methods;
    res.send("Terms and Condition page loaded");
    // res.end("Terms and Condition page loaded");
})

app.listen(8000, ()=>{
    console.log("Server is run on port :8000");
})


