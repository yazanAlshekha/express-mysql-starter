const permissions = require('./route.permissions');

const commonRights = [permissions.user.read, permissions.user.update];

module.exports = {
  types: ['USER', 'ADMIN'],
  USER: {
    rights: [],
  },
  ADMIN: {
    rights: [...commonRights],
  },
};
