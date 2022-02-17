const express = require("express");
const router = express.Router();
const controller = require('../controller/controller');

router.get("/", controller.find_All);

router.get("/add", controller.addCourseShow);

router.post("/add", controller.addCourse);

router.get("/update/:id", controller.updateCourseShow);

router.post("/update", controller.updateCourse);

router.get("/:id", controller.remove_course);


module.exports = router;