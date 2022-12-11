const catchAsync=require('../utils/catchAsync')
const pick=require('../utils/pick')
const{userService}=require('../services')
const httpStatus = require('http-status')
const { sendDataToProcessId } = require('pm2')

exports.getUserList=catchAsync(async(req,res)=>{
    const payload=pick(req.body,['id','name'])
    
    const getUserLista=await userService.getUserList(payload)
    res.status(httpStatus.OK).send(getUserLista)
})