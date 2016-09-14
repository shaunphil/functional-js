module.exports = function duckCount(...objs) {
  return Array.prototype.slice.call(objs).filter( function(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}
