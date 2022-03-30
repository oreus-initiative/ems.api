const { default: knex } = require('knex');
const db = require('../models');
const ApiError = require('../utils/apiError');
const http = require('../utils/httpMethods');
const { flattenSingleKeyObjectsArray } = require('../utils/result.utils');

const create = (customer) => new Promise((resolve, reject) => {
  db('customer')
    .insert(customer)
    .returning('id')
    .then((result) => {
      resolve(flattenSingleKeyObjectsArray('id', result));
    })
    .catch((err) => {
      reject(ApiError.internal(http.POST, err));
    });
});

const update = (id, customer) => new Promise((resolve, reject) => {
  db('customer')
    .whereNull('deleted_at')
    .where('id', id)
    .update({
      ...customer,
      updated_at: db.fn.now(),
    })
    .returning('id')
    .then((res) => {
      if (res.length > 0) {
        resolve(id);
      } else {
        reject(ApiError.notFound(http.PUT, `Customer '${id}' was not found`));
      }
    })
    .catch((err) => {
      reject(ApiError.internal(http.POST, err));
    });
});

const del = (id) => new Promise((resolve, reject) => {
  db('customer')
    .where('id', id)
    .whereNull('deleted_at')
    .update({
      deleted_at: db.fn.now(),
    })
    .returning('id')
    .then((res) => {
      if (res.length > 0) {
        resolve();
      } else {
        reject(ApiError.notFound(http.DELETE, `Customer '${id}' was not found`));
      }
    })
    .catch((err) => {
      reject(ApiError.internal(http.DELETE, err));
    });
});

const read = (id) => new Promise((resolve, reject) => {
  db('customer')
    .where('id', id)
    .whereNull('deleted_at')
    .select('*')
    .first()
    .then((result) => {
      if (!result) {
        reject(ApiError.notFound(http.GET, `Customer with id '${id}' was not found.`));
      } else {
        resolve(result);
      }
    })
    .catch((err) => {
      reject(ApiError.internal(http.GET, err));
    });
});

const readAll = (page) => new Promise((resolve, reject) => {
  const perPage = 10;
  db('customer')
    .count('id')
    .whereNull('deleted_at')
    .first()
    .then((count) => {
      const totalCount = parseInt(count.count, 10);
      if (page * perPage >= totalCount) {
        reject(ApiError.badRequest(http.GET, `The requested page (${page}) exceeds the available count (${totalCount}) and number of elements per page (${perPage}).`));
      }
      db('customer')
        .select('*')
        .whereNull('deleted_at')
        .orderBy([
          {
            column: 'updated_at',
            order: 'desc',
          },
          {
            column: 'id',
            order: 'desc',
          },
        ])
        .groupBy('customer.id')
        .limit(perPage)
        .offset(page * perPage)
        .then((result) => {
          resolve({
            _metadata: {
              page: parseInt(page, 10),
              per_page: perPage,
              page_count: result.length,
              total_count: totalCount,
            },
            data: result,
          });
        })
        .catch((err) => {
          reject(ApiError.internal(http.GET, `Can't count results ${err}`));
        });
    })
    .catch((err) => {
      reject(ApiError.internal(http.GET, err));
    });
});

module.exports = {
  create,
  update,
  del,
  read,
  readAll,
};
