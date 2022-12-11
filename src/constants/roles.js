const permissions = require('./route.permissions');

module.exports = {
  types: ['ADMIN', 'USER'],
  ADMIN: {
    rights: [permissions.dashboard.user.read],
  },
  USER: {
    rights: [
      permissions.user.update,
      permissions.program.read,
      permissions.subscription.read,
      permissions.interested.read,
    ],
  },
};
