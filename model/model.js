
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    coursename:String,
    courseduration:String,
    coursefees:String,
});

const Course = mongoose.model('course',courseSchema);
module.exports = Course;