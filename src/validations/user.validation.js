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

