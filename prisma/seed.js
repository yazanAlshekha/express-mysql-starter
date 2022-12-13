const { prisma } = require("../src/services/prisma.service")



const main =async()=>{

    // await prisma.courseStudent.deleteMany({});

    
    // await prisma.student.deleteMany({});
    // await prisma.course.deleteMany({});
    // await prisma.instructor.deleteMany({})

    // instructor model
    // await prisma.instructor.createMany({
    //     data:[
    //         {name:"yazan"},
    //         {name:"abdallah"},
    //         {name:"mohanad"},
    //         {name:"islam"}
    // ]
    // });

    // student model
    // await prisma.student.deleteMany({});
    // await prisma.student.createMany({
    //     data:[
    //         {name:"islam"},
    //         {name:"rana"},
    //         {name:"yamen"},
    //         {name:"fadi"}
    //  ]
    // });

    // Course model
    // await prisma.course.deleteMany({});
    // await prisma.course.createMany({
    //     data:[
    //          { courseName : "java" , instructorId : 1 , } ,
    //          { courseName : "python" , instructorId : 1 , } ,
    //          { courseName : "javaScript" , instructorId : 2 , } ,
    //          { courseName : "java" , instructorId : 2, } ,
    //          { courseName : "c" , instructorId : 3 , } ,
    //          { courseName : "c#" , instructorId : 3 , } ,
    //          { courseName : "c++" , instructorId : 3 , } ,
    //          { courseName : "python" , instructorId : 4 , } ,
              
    //         ]
    // });


    // await prisma.courseStudent.deleteMany({});
    // await prisma.courseStudent.createMany({
    //     data:[ 
    //         {courseId : 1 , studentId:2 , review:"very good course" , rate:4.5 , isLiked:true },
    //         {courseId : 1 , studentId:3 , review:"good course" , rate:3 , isLiked:false },
    //         {courseId : 1 , studentId:1 , review:"not bad" , rate:2 , isLiked:false },
    //         {courseId : 3 , studentId:3 , review:"excelent" , rate:5 , isLiked:true },
    //         {courseId : 6 , studentId:4 , review:"not bad" , rate:1 , isLiked:false },
    //         {courseId : 3 , studentId:4 , review:"excelent" , rate:5 , isLiked:true },
    //         {courseId : 7 , studentId:4 , review:"excelent" , rate:5 , isLiked:true },
    //         {courseId : 8 , studentId:3 , review:"excelent" , rate:5 , isLiked:true },
    //         {courseId : 4 , studentId:3 , review:"excelent" , rate:5 , isLiked:true },
            
    //         ]
    // })


    // await prisma.comment.createMany({
    //     data:[
    //         {studentId:1 , content:"nice lecture" , courseId:1 },
    //         {studentId:1 , content:"good lecture" , courseId:1 },
    //         {studentId:2 , content:"good explain" , courseId:3 },
    //         {studentId:4 , content:"nice lecture" , courseId:3 },
    //         {studentId:4 , content:"nice lecture" , courseId:5 }
    //     ]
    // })

}

main().catch((error)=>console.log(error))