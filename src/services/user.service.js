const { prisma } = require("./prisma.service")


exports.getUserList=async(payload)=>{


    const userList=await prisma.user.findMany({})
    return user
}

exports.getUserListPost=async(payload) => {
    console.log("🚀 ~ file: user.service.js:12 ~ exports.getUserListPost=async ~ payload", payload)


    // const userList=await prisma.user.findMany({})
    return payload
}