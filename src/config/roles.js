const allRoles = {
  user: [],
  admin: ['getUsers', 'manageUsers'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));
console.table(roleRights?.entries());

module.exports = {
  roles,
  roleRights,
};
