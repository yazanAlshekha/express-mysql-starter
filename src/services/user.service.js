const { prisma } = require("./prisma.service")


exports.getUserList=async(payload)=>{


    const userList=await prisma.user.findMany({})
    return user
}