const catchAsync = require('../utils/catchAsync');
const pick = require('../utils/pick');
const { studentService } = require('../services');
const httpStatus = require('http-status');
const { sendDataToProcessId } = require('pm2');

exports.enrollCourses = catchAsync(async (req, res) => {
  const payload = pick(req.body, ['studentId', 'courseId']);
  const result = await studentService.enrollCourses(payload);
  res.status(httpStatus.CREATED).send('courses has been enrolled');
});

exports.coursesList = catchAsync(async (req, res) => {
  const result = await studentService.courseList();
  res.status(httpStatus.OK).send(result);
});

exports.courseDetails = catchAsync(async (req, res) => {
  const payload = pick(req.query, ['courseId', 'studentId']);
  const result = await studentService.courseDetails(payload);
  res.status(httpStatus.OK).send(result);
});

exports.likeCourse = catchAsync(async (req, res) => {
  const payload = pick(req.query, ['courseId', 'studentId']);
  const result = await studentService.likeCourse(payload);
  res.status(httpStatus.OK).send(result);
});

exports.commentOnCourse = catchAsync(async (req, res) => {
  const payload = pick(req.body, ['courseId', 'studentId', 'content']);
  const result = await studentService.commentOnCourse(payload);
  res.status(httpStatus.CREATED).send(result);
});

exports.rateAndReviewCourse = catchAsync(async (req, res) => {
  const payload = pick(req.body, ['courseId', 'studentId', 'rate', 'review']);
  const result = await studentService.rateAndReviewCourse(payload);
  res.status(httpStatus.OK).send(result);
});
