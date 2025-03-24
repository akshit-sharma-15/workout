const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect("mongodb+srv://akshitbhai15:akshit@cluster0.nnphw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("mongodb is connected"))
.catch(err => console.error("mongodb connection is failed"));


app.get ('/' ,(req,res) => 
res.send("connecting to mongodb")
);

// app.post ('/users' ,(req,res) => 
//     try:{}
//     catch{
//     });

//     app.put ('/' ,(req,res) => 
//         try:{}
//         catch{
//         });

// app.delete('/delete', async(req,res) =>{
//     try:{
//         const deleteItems = 
//         res.status(200).json(deleteItems)
//     }
//     catch:{

//     }
// })



const PORT=8000;
app.listen(process.env.PORT,()=>{
    console.log(`Port is ruuning on ${PORT}`)
})
