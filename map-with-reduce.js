module.exports = function arrayMap(arr, fn) {
  var returnArr = [];

  returnArr.push(fn(arr[0], 0, arr));
  arr.reduce( function(prev, curr, index, array) {
    returnArr.push(fn(curr, index, array));
  });

  return returnArr;
};
