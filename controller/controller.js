const course = require("../model/model");
//get all course
const course_all = async(req,res)=>{
    try{
        const course = await course.find();
        res.json(course);   
    } catch (error){
        res.json({message:error});
    }
};
//get single course
const course_single =async (req,res)=>{};
//add new course
const course_create = async(req,res)=>{};
//update course
const course_update = async(req,res)=>{};
//delete course
const course_delete =async (req,res)=>{};

module.exports={
    course_all,
    course_single,
    course_create,
    course_update,
    course_delete,
};