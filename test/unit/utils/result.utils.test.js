const { flattenSingleKeyObjectsArray } = require('../../../src/utils/result.utils');

describe('Result Utils Tests', () => {
  // generateApiKey ------------------------------------------------

  const invalidKey='key_that_does_not_exist';
  const validKey='id';
  const validArray = [
    {
      id: '1',
      other_attribute: 'asd',
    },
    {
      other_attribute: 'asd',
      id: '2',
    },
    {
      id: '3',
      other_attribute: 'asd',
    },
    {
      id: '4',
      id_sub: '4',
      other_attribute: 'asd',
    },
  ];
  const expected = ['1', '2', '3', '4'];

  test('flattenSingleKeyObjectsArray_noKey_ExceptionThrown', () => {
    expect(() => {
      flattenSingleKeyObjectsArray(undefined, validArray);
    }).toThrow();
  });
  test('flattenSingleKeyObjectsArray_noArray_ReturnsEmptyArray', () => {
    const result = flattenSingleKeyObjectsArray(validKey, undefined);
    expect(result).toEqual([]);
  });
  test('flattenSingleKeyObjectsArray_keyDoesNotExistInObjects_ReturnsEmptyArray', () => {
    const result = flattenSingleKeyObjectsArray(invalidKey, validArray);
    expect(result).toEqual([]);
  });
  test('flattenSingleKeyObjectsArray_keyExistsInObjectsArray_ReturnsKeyValuesArray', () => {
    const result = flattenSingleKeyObjectsArray(validKey, validArray);
    expect(result).toEqual(expected);
  });
});
