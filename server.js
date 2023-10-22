const express = require('express');
const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost:27017/multiplePopulate',{
    useNewUrlParser:true
}).then(res=>{
    console.log('db connected');
}).catch(err=>{
    console.log(err);
})
const app = express();
app.use(express.json());
app.use('/',require('./routes/commonRoute'));
app.listen(3000,()=>{
console.log('server is run on 3000');
})