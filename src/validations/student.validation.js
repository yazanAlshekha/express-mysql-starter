const Joi = require('joi');

exports.enrollCourses = {
  body: Joi.object().keys({
    studentId: Joi.number().required(),
    courseId: Joi.number().required(),
  }),
};

exports.courseDetails = {
  query: Joi.object().keys({
    courseId: Joi.number().required(),
  }),
};

exports.likeCourse = {
  query: Joi.object().keys({
    courseId: Joi.number().required(),
    studentId: Joi.number().required(),
  }),
};

exports.commentOnCourse = {
  body: Joi.object().keys({
    courseId: Joi.number().required(),
    studentId: Joi.number().required(),
    content: Joi.string().required(),
  }),
};

exports.rateAndReviewCourse = {
  body: Joi.object().keys({
    review: Joi.string(),
    rate: Joi.number(),
    studentId: Joi.number().required(),
    courseId: Joi.number().required(),
  }),
};
