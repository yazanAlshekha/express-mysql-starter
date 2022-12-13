const { prisma } = require("./prisma.service")


exports.getUserList=async(payload)=>{


    const userList=await prisma.user.findMany({})
    return user
}

exports.getUserListPost=async(payload) => {
  
    // const userList=await prisma.user.findMany({})
    return payload
}

exports.enrollCourses = async(payload)=>{
    const result = await prisma.courseStudent.createMany({
       data:payload    
       });
    return result;
}

exports.courseList = async(payload)=>{
    const result = await prisma.course.findMany()
    return result;
}

exports.courseDetails = async(payload)=>{
    const result = await prisma.course.findUnique({
        where:{
            id :payload.courseId
        },
        select:{
            courseName:true,
            comment:true,
            instructorId:true
        }

       });
    return result;
}

exports.likeCourse = async(payload)=>{
    const result = await prisma.CourseStudent.update({
        where:{
            courseId : payload.courseId,
            studentId : payload.studentId
        },
        data:{
            isLiked:true
        }
    })
    return result;
}