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

// log requests
app.use(morgan('tiny'));

dotenv.config({path:'./.env'});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mysql connection

const db = require('./model/model');


// parse request to body-parser
app.use(bodyparser.urlencoded({extended : true}))

// set view engine
app.set("view engine", "ejs")
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
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


app.listen(3000, ()=> { console.log('Server is running on http://localhost:3000')});