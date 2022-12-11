const express = require('express');

const router = express.Router();
const studentRouter=require('./studnt.route')
const defaultRoutes = [
  {
    path: '/student',
    route: studentRouter,
  },
  {
    path: '/teacher',
    route: studentRouter,
  },
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;

