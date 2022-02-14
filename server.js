const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

const connectDB = require('./database/connection');
var  app = express();

//dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT ||3000

// log requests
app.use(morgan('tiny'));

// mongodb connection


// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
//app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load routers
app.use('/', require('./routes/router'))

app.get("/",(req,res)=>{
    res.send("crud");
})
app.get('/',(req,res)=>{ 
    res.render('index')
});

app.listen(PORT,()=>{
    console.log(`it listen to ${PORT}`)
});