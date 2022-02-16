const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/courses
    axios.get('http://localhost:3000/api/courses')
        .then(function(response){
            res.render('index', { courses : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_course = (req, res) =>{
    res.render('add_course');
}

exports.update_course = (req, res) =>{
    axios.get('http://localhost:3000/api/courses', { params : { id : req.query.id }})
        .then(function(coursedata){
            res.render("update_course", { course : coursedata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}