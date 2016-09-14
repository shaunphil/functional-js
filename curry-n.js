module.exports = function curryN(fn, n) {
  var numArgs = n || fn.length;
   
  return function addedArg(arg) {
    if (numArgs > 1) {
      return curryN(fn.bind(this, arg), numArgs - 1);
    } else {
      return fn(arg);
    }
  }
}
