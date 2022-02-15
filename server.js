const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// load routers
const courseroutes=require("./routes/router");
app.use('/api/course',courseroutes);


//const connectDB = require('./database/connection');

const Course = require('./model/model');

// log requests
app.use(morgan('tiny'));

dotenv.config({path:'./.env'});
// mongodb connection
mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology:true,useNewUrlParser:true},
    ()=>console.log("connected to db")
);

// parse request to body-parser
app.use(bodyparser.urlencoded({extended : true}))

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/add-course',(req,res)=>{
    res.render('add_course');
})
app.get('/update-course',(req,res)=>{
    res.render('update_course');
})

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))
app.listen(3000, ()=> { console.log('Server is running on http://localhost:3000')});