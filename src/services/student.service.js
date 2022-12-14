const { prisma } = require('./prisma.service');

exports.enrollCourses = async (payload) => {
  const result = await prisma.courseStudent.createMany({
    data: payload,
  });
  return result;
};

exports.courseList = async (payload) => {
  const result = await prisma.course.findMany();
  return result;
};

exports.courseDetails = async (payload) => {
  const result = await prisma.course.findUnique({
    where: {
      id: payload.courseId,
    },
    select: {
      courseName: true,
      comment: true,
      instructorId: true,
    },
  });
  return result;
};

exports.likeCourse = async (payload) => {
  const result = await prisma.courseStudent.update({
    where: {
      courseId_studentId: {
        courseId: payload.courseId,
        studentId: payload.studentId,
      },
    },
    data: {
      isLiked: true,
    },
  });
  return result;
};

exports.commentOnCourse = async (payload) => {
  const result = await prisma.comment.create({
    data: {
      studentId: payload.studentId,
      courseId: payload.courseId,
      content: payload.content,
    },
  });
  return result;
};

exports.rateAndReviewCourse = async (payload) => {
  const result = await prisma.courseStudent.update({
    where: {
      courseId_studentId: {
        courseId: payload.courseId,
        studentId: payload.studentId,
      },
    },
    data: {
      review: payload.review,
      rate: payload.rate,
    },
  });
  return result;
};
