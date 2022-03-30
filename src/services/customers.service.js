const db = require('../models');
const ApiError = require('../utils/apiError');
const { flattenSingleKeyObjectsArray } = require('../utils/result.utils');

const create = (customer) => new Promise((resolve, reject) => {
  db('customer')
    .insert(customer)
    .returning('id')
    .then((result) => {
      resolve(flattenSingleKeyObjectsArray('id', result));
    })
    .catch((err) => {
      reject(ApiError.internal(err));
    });
});

const update = (id, customer) => {};

const del = (id) => {};

const read = (id) => {};

const readAll = () => {};

module.exports = {
  create,
  update,
  del,
  read,
  readAll,
};
