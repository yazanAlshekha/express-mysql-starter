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

exports.getAllUsers=catchAsync(async(req,res)=>{
    // const payload=pick(req.body,['id','name'])
    
    // const getUserLista=await userService.getUserList(payload)

    const users=[
        {name:"ahmad",id:"1"},
        {name:"rami",id:"2"}
    ]
   console.log(req.query);
   console.log(req.params);
    
    res.status(httpStatus.OK).send(users)
})



exports.getAllUsersPost=catchAsync(async(req,res)=>{
    const payload=pick(req.body,['id','name'])
   
    const getUserLista=await userService.getUserListPost(payload)
    console.log("ddd",payload)
    // console.log("ddd",getUserLista);
    const users=[
        {name:"ahmad",id:"1"},
        {name:"rami",id:"2"},
        {name:"fff",id:"3"}
    ]
    // console.log("sdddddddddddddd");
    
    // console.log(req);

    res.status(httpStatus.USE_PROXY).send(users)
})



exports.enrollCourses = catchAsync( async(req,res)=>{

    const payload = pick(req.body,["studentId","courseId"]);
    const result = await userService.enrollCourses(payload);
    res.status(httpStatus.CREATED).send("courses has been enrolled");
})


exports.coursesList = catchAsync( async(req,res)=>{
    const result = await userService.courseList()
    res.status(httpStatus.OK).send(result)
})


exports.courseDetails = catchAsync( async(req,res)=>{
    const payload = pick(req.query,["courseId" , "studentId"]);
    const result = await userService.courseDetails(payload);
    res.status(httpStatus.OK).send(result);
})


exports.likeCourse = catchAsync( async(req,res)=>{
    const payload = pick(req.query,["courseId","studentId"]);
    const result = await userService.likeCourse(payload);
    res.status(httpStatus.OK).send(result);
})