const express = require('express');
const validate = require('../../middlewares/validate');
const {instructorController} = require('../../controllers');
const {instructorValidation} = require('../../validations')



const router = express.Router();

router.route('/crudCourse')
.get(validate(instructorValidation.getCourses), instructorController.getCourses)
.post(validate(instructorValidation.createCourse) ,instructorController.createCourse )
.put(validate(instructorValidation.editCourse),instructorController.editCourse)
.delete(validate(instructorValidation.deleteCourse) ,instructorController.deleteCourse )

router.route('/courseLikes')
.get(validate(instructorValidation.courseLikes), instructorController.courseLikes)

router.route('/courseReviews')
.get(validate(instructorValidation.courseReview), instructorController.courseReview)

router.route('/courseComments')
.get(validate(instructorValidation.courseComments), instructorController.courseComments)


module.exports=router