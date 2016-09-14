module.exports = function Spy(target, method) {  
  var obj = {
    count: 0
  };

  var oldMethod = target[method];
  target[method] = function(...args) {
    obj.count += 1;
    return oldMethod.apply(this, [...args]); 
  }

  return obj;
}
