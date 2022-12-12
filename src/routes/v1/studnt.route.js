const express = require('express');
const { auth } = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { userController } = require('../../controllers/');
const { userValidation } = require('../../validations/');
const routePermissions = require('../../constants/route.permissions');
const router = express.Router();



router.route('/')
.get(validate(userValidation.getUserList),userController.getUserList)
.post(validate(userValidation.getUserList),userController.getUserList)
.put(validate(userValidation.getUserList),userController.getUserList)
.delete(validate(userValidation.getUserList),userController.getUserList)


router.route('/users')
.get(validate(userValidation.getAllUsers),userController.getAllUsers)
.post(validate(userValidation.getAllUsers),userController.getAllUsersPost)
// .put(validate(userValidation.getUserList),userController.getUserList)
// .delete(validate(userValidation.getUserList),userController.getUserList)




module.exports=router