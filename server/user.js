const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

var users = {};

router.post('/register', (req, res) => {
  var user = req.body;
  console.log(req.body);
  console.log(user.username);
  if (users[user.username]) {
    return res.status(400).json({
      msg: 'User is already Exists, please login.'
    });
  } else {
    users[user.username] = user.password;
    console.log(users);
    return res.status(200).json({
      msg: 'Successfully created user, please login'
    });
  }
});

router.post('/login', (req, res) => {
  var user = req.body;
  console.log(req.get('X-AUTH-HEADER'));
  if (users[user.username] && users[user.username] === user.password) {
    return res.status(200).json({
      msg: 'You have logged in successfully!',
      token: jwt.sign({
        user: user.username
      }, 'SECRET')
    });
  } else {
    return res.status(400).json({
      msg: 'Invalid username or password'
    });
  };
});
module.exports = router;
