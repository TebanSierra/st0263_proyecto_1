const User = require('../models/user');

exports.createUser = user => {
  const newUser = new User({
    nickname: user.nickname,
    email: user.email,
    password: user.hashedPwd,
    createdAt: user.createdAt
  });
  return newUser.save().then(res => Promise.resolve(res));
};
