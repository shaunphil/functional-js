module.exports = function reduce(arr, fn, init, index = 0) {
  if (index !== arr.length) {
    return reduce(arr, fn, fn(init, arr[index], index, arr), index + 1);
  } else {
    return init;
  }
}
