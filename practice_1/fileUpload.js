const express = require('express');
const multer = require('multer');


const app = express();

// created storage
const storage = multer.diskStorage({
    destination: (req, file, callBack)=>{
        callBack(null, './upload');
    },
    filename: (req, file, callBack)=>{
        callBack(null, file.originalname);
    }
});

const upload = multer({storage: storage}).single('file');

app.post('/', (req, res)=>{
    upload(req, res, (err)=>{
        if(err){
            console.log('Something is went wrong!');
            res.end('Something is went wrong!')
        }else {
            console.log('File has been uploaded successfully');
            res.send('File has been uploaded successfully');
        }
    })
})



app.listen(8000, ()=>{
    console.log('Server is running on port :8000');
})