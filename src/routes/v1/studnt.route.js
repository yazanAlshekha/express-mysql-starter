const express = require('express');
const { auth } = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { studentController } = require('../../controllers/');
const { studentValidation } = require('../../validations/');
const routePermissions = require('../../constants/route.permissions');
const router = express.Router();

router.route('/enrollCourses').post(validate(studentValidation.enrollCourses), studentController.enrollCourses);

router.route('/coursesList').get(studentController.coursesList);

router.route('/courseDetails').get(validate(studentValidation.courseDetails), studentController.courseDetails);

router.route('/likeCourse').put(validate(studentValidation.likeCourse), studentController.likeCourse);

router.route('/commentOnCourse').post(validate(studentValidation.commentOnCourse), studentController.commentOnCourse);

router
  .route('/rateAndReviewCourse')
  .put(validate(studentValidation.rateAndReviewCourse), studentController.rateAndReviewCourse);

module.exports = router;
