const Joi = require('joi');

exports.getCourses={
    query:Joi.object().keys({
        instructorId :Joi.number().required()
    })
}

exports.createCourse={
    body:Joi.object().keys({
        instructorId :Joi.number().required(),
        courseName:Joi.string().required()
    })
}

exports.deleteCourse={
    body:Joi.object().keys({
        courseId :Joi.number().required(),
        instructorId:Joi.number().required()
    })
}
exports.editCourse={
    body:Joi.object().keys({
        courseId :Joi.number().required(),
        instructorId:Joi.number().required(),
        courseName:Joi.string().required()
    })
}



exports.courseLikes={
    query:Joi.object().keys({
        courseId :Joi.number().required()
    })
}

exports.courseReview={
    query:Joi.object().keys({
        courseId :Joi.number().required()
    })
}

exports.courseComments={
    query:Joi.object().keys({
        courseId :Joi.number().required()
    })
}