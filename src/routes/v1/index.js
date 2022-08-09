const express = require('express');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/example-route',
    route: '<path_to_ur_rote>',
  },
];

/*
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
*/
