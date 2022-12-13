const express = require('express');

const router = express.Router();
const studentRouter=require('./studnt.route')
const instructorRouter=require('./instructor.route');
const defaultRoutes = [
  {
    path: '/student',
    route: studentRouter,
  },
  {
    path: '/instructor',
    route: instructorRouter,
  },
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;

