const express = require('express');
const multer = require('multer');

const app = express();



// File uploading using multer npm package;
let storage = multer.diskStorage({
    destination: (req, file, callBack)=>{
        callBack(null, './upload')
    },
    filename: (req, file, callBack)=>{
        callBack(null, file.originalname)
    }
}); // storage end

let upload = multer({storage: storage}).single("my_file");
app.post('/', (req, res)=>{
    upload(req, res, (error)=>{
        if (error){
            res.send(error);
        }else{
            res.send('File uploaded successfully');
        }
    })
})





app.listen(8000, ()=>{
    console.log('Server is run on post :8000');
})