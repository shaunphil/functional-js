module.exports = function countWords(words) {
  var returnObj = {}; 
  returnObj[words[0]] = 1;
  
  var reduced = words.reduce( function(prev, curr, ind, array) {
    if (returnObj[curr]) {
      returnObj[curr] += 1;
    } else {
      returnObj[curr] = 1;
    }
  });
  
  return returnObj;
}
