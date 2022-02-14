const express = require("express")
const route = express.Router()
const controller = require('../controller/controller');

route.get('/',(req,res)=>{
    res.render('index')

})
route.get('/add-course',(req,res)=>{
    res.render('add_course')
    
})
route.get('/update-user',(req,res)=>{
    res.render('update_course')
    
})
// api
route.post('/api/course',controller.create);
//route.get('/api/courses',controller.create.find);
//route.put('/api/courses/:COURSENAME',controller.update);
//route.delete('/api/courses',controller.delete);

module.exports=route