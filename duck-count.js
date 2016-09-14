module.exports = function duckCount(...objs) {
  var objArray = [...objs];
  return function duckCountInner(count, objs) {
    console.log("objs.length = " + objs.length);
    if(objs.length > 0) {
      if (Object.prototype.hasOwnProperty.call(objs[0], 'quack')) {
        console.log("Matched");
        objs.shift();
        return duckCountInner(++count, objs);
      } else {
        objs.shift();
        return duckCountInner(count, objs);
      }
    } else {
      return count;
    }
  }(0, objArray);
}
