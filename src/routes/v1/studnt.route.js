const express = require('express');
const { auth } = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { studentController } = require('../../controllers/');
const { studentValidation } = require('../../validations/');
const routePermissions = require('../../constants/route.permissions');
const router = express.Router();



router.route('/')
.get(validate(studentValidation.getUserList),studentController.getUserList)
.post(validate(studentValidation.getUserList),studentController.getUserList)
.put(validate(studentValidation.getUserList),studentController.getUserList)
.delete(validate(studentValidation.getUserList),studentController.getUserList)


router.route('/users')
.get(validate(studentValidation.getAllUsers),studentController.getAllUsers)
.post(validate(studentValidation.getAllUsers),studentController.getAllUsersPost)
// .put(validate(userValidation.getUserList),userController.getUserList)
// .delete(validate(userValidation.getUserList),userController.getUserList)

router.route('/enrollCourses')
.post(validate(studentValidation.enrollCourses), studentController.enrollCourses)

router.route('/coursesList')
.get(studentController.coursesList)

router.route('/courseDetails')
.get(validate(studentValidation.courseDetails), studentController.courseDetails)


// i have error in this route 
router.route('/likeCourse')
.get(validate(studentValidation.likeCourse), studentController.likeCourse)



module.exports=router