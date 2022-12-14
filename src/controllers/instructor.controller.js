const catchAsync = require('../utils/catchAsync');
const pick = require('../utils/pick');
const httpStatus = require('http-status');
const { instructorService } = require('../services');

exports.getCourses = catchAsync(async (req, res) => {
  const payload = pick(req.query, ['instructorId']);
  const result = await instructorService.getCourses(payload);
  res.status(httpStatus.OK).send(result);
});

exports.createCourse = catchAsync(async (req, res) => {
  const payload = pick(req.body, ['instructorId', 'courseName']);
  const result = await instructorService.createCourse(payload);
  res.status(httpStatus.CREATED).send('course has been created');
});

exports.deleteCourse = catchAsync(async (req, res) => {
  const payload = pick(req.body, ['instructorId', 'courseId']);
  const result = await instructorService.deleteCourse(payload);
  console.log('🚀 ~ file: instructor.controller.js:17 ~ exports.deleteCourse ~ result', result);

  res.status(httpStatus.OK).send('course has been deleted');
});

exports.editCourse = catchAsync(async (req, res) => {
  const payload = pick(req.body, ['instructorId', 'courseId', 'courseName']);
  const result = await instructorService.editCourse(payload);
  res.status(httpStatus.CREATED).send('course has been updated');
});

exports.courseLikes = catchAsync(async (req, res) => {
  const payload = pick(req.query, ['courseId']);
  const result = await instructorService.courseLikes(payload);
  res.status(httpStatus.OK).send(result);
});

exports.courseReview = catchAsync(async (req, res) => {
  const payload = pick(req.query, ['courseId']);
  const result = await instructorService.courseReview(payload);
  res.status(httpStatus.OK).send(result);
});

exports.courseComments = catchAsync(async (req, res) => {
  const payload = pick(req.query, ['courseId']);
  const result = await instructorService.courseComments(payload);
  res.status(httpStatus.OK).send(result);
});

exports.instructorRate = catchAsync(async (req, res) => {
  const payload = pick(req.query, ['instructorId']);
  const result = await instructorService.instructorRate(payload);
  res.status(httpStatus.OK).send(result);
});
