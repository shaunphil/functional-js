module.exports = function checkUsersValid(goodUsers) {
  return function allUsersValid(users) {
    return users.every( function(user) {
      return goodUsers.some( function(guser) {
        return guser.id === user.id;
      });
    });
  };
}
