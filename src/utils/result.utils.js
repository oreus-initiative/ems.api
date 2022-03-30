const flattenSingleKeyObjectsArray = (key, array) => {
  const res = [];
  if (!key) throw new Error('Key required.');
  if (!array) return res;

  array.forEach((elem) => {
    if (elem[key]) {
      res.push(elem[key]);
    }
  });
  return res;
};

module.exports = {
  flattenSingleKeyObjectsArray,
};
