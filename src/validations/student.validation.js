const Joi=require('joi')


exports.getUserList={
    body:Joi.object().keys({
        id:Joi.string()
    })
}


exports.getAllUsers={
    body:Joi.object().keys({
        id:Joi.number().required(),
        name:Joi.string().allow('').default('abdallah')
    })
}

exports.enrollCourses={
    body:Joi.object().keys({
        studentId :Joi.number().required(),
        courseId:Joi.number().required(),
    })
}

exports.courseDetails={
    query:Joi.object().keys({
        courseId:Joi.number().required(),
    })
}

exports.likeCourse={
    query:Joi.object().keys({
        courseId:Joi.number().required(),
        studentId:Joi.number().required()
    })
}