const logger = require('../../utils/logger');

const add = (req,res,next) => {
  logger.info('A Request to add a customer retribution has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

const update = (req,res,next) => {
  logger.info('A Request to update a customer retribution has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

const del = (req,res,next) => {
  logger.info('A Request to delete a customer retribution has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

const get = (req,res,next) => {
  logger.info('A Request to get a customer retribution has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

const getAll = (req,res,next) => {
  logger.info('A Request to get all customer retributions has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

module.exports = {
  add,
  update,
  del,
  get,
  getAll,
};
