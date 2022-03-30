const logger = require('../utils/logger');
const customerService = require('../services/customers.service');

const create = (req, res, next) => {
  customerService.create(req.body).then((result) => {
    logger.info(`POST > Customer(s) '${result}' created.`);
    res.status(200).json({
      code: 200,
      msg: 'Successfully created customer(s).',
      result,
    });
  }).catch((err) => {
    next(err);
  });
};

const update = (req, res, next) => {
  logger.info('A Request to update a customer has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

const del = (req, res, next) => {
  logger.info('A Request to delete a customer has been made.');
  res.status(501).json({
    code: 501,
    msg: 'Not implemented',
  });
};

const read = (req, res, next) => {
  customerService.get(req.params.id).then((result) => {
    logger.info(`GET > Customer '${req.params.id}' resolved.`);
    res.status(200).json(result);
  }).catch((err) => {
    next(err);
  });
};

const readAll = (req, res, next) => {
  logger.info('A Request to get all customers has been made.');
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
