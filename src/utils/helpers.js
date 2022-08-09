const moment = require('moment');
const bcrypt = require('bcryptjs');

exports.groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    // eslint-disable-next-line no-param-reassign
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

exports.uuidv4 = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // eslint-disable-next-line no-bitwise
    const r = (Math.random() * 16) | 0;
    // eslint-disable-next-line no-bitwise
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

exports.genrateTestID = function name(diagnose, id) {
  const zDigits = new Array(11 - id.toString().length).join(0);

  return `${diagnose + zDigits + id}`;
};

exports.addHoursToDate = function (hours) {
  return moment().add(hours, 'hours');
};

exports.addMinToDate = function (mins) {
  return moment().add(mins, 'minutes');
};

exports.addDaysToDate = function (days) {
  return moment().add(days, 'days');
};

exports.addOneDayToDate = function (date) {
  if (date) return moment(date.toISOString()).add(1, 'days').toISOString();
};

exports.subtractOneDayFromDate = function (date) {
  if (date) return moment(date.toISOString()).subtract(1, 'days').toISOString();
};

exports.generateHashedFromOtp = async (otp) => {
  const salt = await bcrypt.genSalt(5);
  const hash = await bcrypt.hash(otp, salt);
  return hash;
};

exports.generateOtp = function () {
  return Math.floor(100000 + Math.random() * 900000);
};

exports.isMatchedOtp = (_otp, OTP) => {
  return bcrypt.compareSync(_otp, OTP);
};

exports.setSortingField = (keys) => {
  const availableSortingColumns = ['id', 'createdAt', 'firstName', 'lastName', 'isActive', 'userId'];
  const orderBy = {};

  if (keys) {
    const key = keys.field.toString();

    const sortingField = availableSortingColumns.includes(key) ? keys.field.toString() : 'createdAt';

    orderBy[sortingField] = keys.descAsc === 'asc' || keys.descAsc === 'desc' ? keys.descAsc : 'asc';

    return { ...orderBy };
  }

  orderBy.createdAt = 'desc';
  return { ...orderBy };
};

exports.calculateTaxTotal = async (price, taxRate) => {
  return (price / 100) * taxRate;
};

exports.tokenExpiresInHours = (gold) => new Date(moment().add(gold, 'hours').toDate().getTime());
exports.tokenExpiresInSeconds = (gold) => new Date(moment().add(gold, 'seconds').unix());
