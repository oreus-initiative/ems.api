const logger = require('../../utils/logger');

const create = (req, res, next) => {
  logger.info('A Request to add a customer retribution has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

const update = (req, res, next) => {
  logger.info('A Request to update a customer retribution has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

const del = (req, res, next) => {
  logger.info('A Request to delete a customer retribution has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

const read = (req, res, next) => {
  logger.info('A Request to get a customer retribution has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

const readAll = (req, res, next) => {
  logger.info('A Request to get all customer retributions has been made.');
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
};
