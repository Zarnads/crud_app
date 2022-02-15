const router=require("express").Router();
const coursecontroller = require('../controller/controller');


const services = require('../services/render');

router.post('/');

router.get('/',services.homeRoutes);

router.get('/:courseId');
router.put('/:courseId');
router.delete('/courseId');

//api
router.post('/api/course', coursecontroller.course_all);
module.exports=router;