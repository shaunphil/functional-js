
module.exports = function getDependencies(part, result) {
  result = result || []

  var dependencies = part && part.dependencies || []
  Object.keys(dependencies).forEach(function(dep) {
    var key = dep + '@' + part.dependencies[dep].version

    if (result.indexOf(key) === -1) {
      result.push(key)
    }

    getDependencies(part.dependencies[dep], result);
  })
  return result.sort()
}

