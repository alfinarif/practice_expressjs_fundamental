const express = require('express');

const app = express();

// Application level middleware
// app.use((req, res, next)=>{
//     console.log('called application level middleware');
//     next();
// })


// Route level Middleware
// middleware for only about page
app.use('/about', (req, res, next)=>{
    console.log('Middleware for about page only!');
    next();
})


app.get('/', (req, res)=>{
    res.send('Welcom to home page');
})


app.get('/about', (req, res)=>{
    res.send('Welcom to about page');
})

app.get('/contact', (req, res)=>{
    res.send('Welcom to contact page');
})






app.listen(8000, ()=>{
    console.log('Server is running on port :8000');
})