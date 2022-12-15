const { prisma } = require('./prisma.service');

///////////////////////////////////////////
// crudCourse routes
exports.getCourses = async (payload) => {
  console.log(payload.instructorId);
  const result = await prisma.course.findMany({
    where: {
      instructorId: payload.instructorId,
    },
  });
  return result;
};

exports.createCourse = async (payload) => {
  const result = await prisma.course.create({
    data: {
      courseName: payload.courseName,
      instructorId: payload.instructorId,
    },
  });
  return result;
};

exports.deleteCourse = async (payload) => {
  const result = await prisma.course.delete({
    where: {
      id: payload.courseId,
    },
  });
  return result;
};

exports.editCourse = async (payload) => {
  const result = await prisma.course.update({
    where: {
      id: payload.courseId,
    },
    data: {
      courseName: payload.courseName,
    },
  });
  return result;
};
////////////////////////////////////////////////

exports.courseLikes = async (payload) => {
  const result = await prisma.courseStudent.findMany({
    where: {
      courseId: payload.courseId,
      isLiked: true,
    },
    select: {
      student: true,
      courseId: true,
      studentId: true,
      isLiked: true,
    },
  });
  return result;
};

exports.courseReview = async (payload) => {
  const result = await prisma.courseStudent.findMany({
    where: {
      courseId: payload.courseId,
    },
    select: {
      student: true,
      courseId: true,
      studentId: true,
      review: true,
    },
  });
  return result;
};

exports.courseComments = async (payload) => {
  const result = await prisma.comment.findMany({
    where: {
      courseId: payload.courseId,
    },
  });
  return result;
};

exports.instructorRate = async (payload) => {
  const result = await prisma.courseStudent.aggregate({
    _avg: {
      rate: true,
    },
    where: {
      courses: {
        instructorId: payload.instructorId,
      },
    },
  });
  return result;
};
