var Coursedb = require('../model/model.js');

// create and save new course
exports.create=(req,res)=>{
    //validate
    if(!req.body){
        res.status(400).send({message:"cannot empty"});
        return;
    }
    //new course
    const course = new course({
        COURSENAME :req.body.COURSENAME,
        COURSEDURATION :req.body.COURSEDURATION ,
        COURSEFEES :req.body.COURSEFEES,
    })
    //save course in database

    // save course in the database
    course
        .save(course)
        .then(data => {
            //res.send(data)
            res.redirect('/add-course');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}
    

// return courses
exports.find=(req,res)=>{
    
}
//update
exports.update=(req,res)=>{
    
}
//delete
exports.delete=(req,res)=>{
    
}