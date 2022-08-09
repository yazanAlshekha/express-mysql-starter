const jwt = require('jsonwebtoken');
const httpStatus = require('http-status');
const fs = require('fs');
const ApiError = require('../utils/ApiError');
const { roleRights } = require('../config/roles');

const JWT_PK = fs.readFileSync('public.key', 'utf8');

const verifyCallback = (req, resolve, reject, requiredRights) => async (err, user) => {
  if (err || !user) {
    console.log(err);
    if (err instanceof jwt.TokenExpiredError) {
      return reject(new ApiError(httpStatus.UNAUTHORIZED, 'token has been expired'));
    }
    return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Please Authenticate'));
  }

  req.user = user;

  if (requiredRights.length) {
    const userRights = roleRights.get(user?.role);
    const hasRequiredRights = requiredRights.every((requiredRight) => userRights.includes(requiredRight));
    if (!hasRequiredRights && req.params.userId !== user.id) {
      return reject(new ApiError(httpStatus.FORBIDDEN, 'Forbidden'));
    }
  }

  resolve();
};

exports.auth =
  (...requiredRights) =>
  async (req, _res, next) => {
    return new Promise((resolve, reject) => {
      jwt.verify(
        req?.headers?.authorization?.split(' ')[1],
        JWT_PK,
        { algorithms: 'RS256' },
        verifyCallback(req, resolve, reject, requiredRights)
      );
    })
      .then(() => next())
      .catch((err) => next(err));
  };
