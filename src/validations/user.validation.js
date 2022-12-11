const Joi=require('joi')

exports.getUserList={
    body:Joi.object().keys({
        id:Joi.string()
    })
}