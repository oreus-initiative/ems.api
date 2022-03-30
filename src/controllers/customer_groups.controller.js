const logger = require('../utils/logger');

const create = (req, res, next) => {
  logger.info('A Request to add a customer group has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

const update = (req, res, next) => {
  logger.info('A Request to update a customer group has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

const del = (req, res, next) => {
  logger.info('A Request to delete a customer group has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

const read = (req, res, next) => {
  logger.info('A Request to get a customer group has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

const readAll = (req, res, next) => {
  logger.info('A Request to get all customer groups has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

const addCustomers = (req, res, next) => {
  logger.info('A Request to add a customer to a customer group has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

const removeCustomers = (req, res, next) => {
  logger.info('A Request to remove a customer group has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

module.exports = {
  create,
  update,
  del,
  read,
  readAll,
  addCustomers,
  removeCustomers,
};
