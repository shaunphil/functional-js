module.exports = function loadUsers(userIds, load, done) {
  var users = [];
  var numDone = 0;  

  userIds.forEach( function(curr, index) {
    load(curr, function(user) {
      users[index] = user;
      numDone++;
      if (numDone === userIds.length) {
        return done(users);
      }
    });
  });
}
