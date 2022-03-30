const logger = require('../utils/logger');

const create = (req, res, next) => {
  logger.info('A Request to add a distribution has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

const update = (req, res, next) => {
  logger.info('A Request to update a distribution has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

const del = (req, res, next) => {
  logger.info('A Request to delete a distribution has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

const read = (req, res, next) => {
  logger.info('A Request to get a distribution has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

const readAll = (req, res, next) => {
  logger.info('A Request to get all distributions has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

const execute = (req, res, next) => {
  logger.info('A Request to execute a distribution has been made.');
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
  execute,
};
