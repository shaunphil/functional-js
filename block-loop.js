module.exports = function repeat(operation, num) {
  
  var myVar = setTimeout(doIt, 1);

  function doIt() {
    if (num <= 0) return;
    operation();
    return repeat(operation, --num);
  }
}
