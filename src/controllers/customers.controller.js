const logger = require('../utils/logger');
const customerService = require('../services/customers.service');
const ApiError = require('../utils/apiError');
const http = require('../utils/httpMethods');

const create = (req, res, next) => {
  const data = req.body;
  customerService.create(data).then((result) => {
    logger.info(`${http.POST} > Customer(s) '${result}' created.`);
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
  const { id } = req.params;
  if (!id) next(ApiError.badRequest(http.PUT, 'Please provide a customer ID.'));
  const data = req.body;
  customerService.update(id, data).then(() => {
    logger.info(`${http.PUT} > Customer '${req.params.id}' updated.`);
    res.status(200).json({
      code: 200,
      msg: 'Successfully updated customer.',
    });
  }).catch((err) => {
    next(err);
  });
};

const del = (req, res, next) => {
  const { id } = req.params;
  if (!id) next(ApiError.badRequest(http.DELETE, 'Please provide a customer ID.'));
  customerService.del(id).then(() => {
    logger.info(`${http.DELETE} > Customer '${req.params.id}' deleted.`);
    res.status(200).json({
      code: 200,
      msg: 'Successfully deleted customer.',
    });
  }).catch((err) => {
    next(err);
  });
};

const read = (req, res, next) => {
  const { id } = req.params;
  if (!id) next(ApiError.badRequest(http.GET, 'Please provide a customer ID.'));

  customerService.read(id).then((result) => {
    logger.info(`${http.GET} > Customer '${req.params.id}' retrieved.`);
    res.status(200).json({
      code: 200,
      msg: 'Successfully retrieved customer.',
      result,
    });
  }).catch((err) => {
    next(err);
  });
};

const readAll = (req, res, next) => {
  const { page } = req.query;
  customerService.readAll(page || 0).then((result) => {
    logger.info(`${http.GET} > Customers page ${page || 0} retrieved.`);
    res.status(200).json({
      code: 200,
      msg: `Successfully retrieved customers (page ${page || 0}).`,
      result,
    });
  }).catch((err) => {
    next(err);
  });
};

module.exports = {
  create,
  update,
  del,
  read,
  readAll,
};
