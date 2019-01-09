const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

var users = {};

const projects = [{
  title: 'Google',
  content: 'Fugiat nulla in duis occaecat minim exercitation magna id labore.',
  imgUrl: 'https://via.placeholder.com/700x400',
  projectUrl: null
},
{
  title: 'Facebook',
  content: 'Fugiat nulla in duis occaecat minim exercitation magna id labore.',
  imgUrl: 'https://via.placeholder.com/700x400',
  projectUrl: null
},
{
  title: 'Apple',
  content: 'Fugiat nulla in duis occaecat minim exercitation magna id labore.',
  imgUrl: 'https://via.placeholder.com/700x400',
  projectUrl: null
},
{
  title: 'Pewdiepie',
  content: 'Fugiat nulla in duis occaecat minim exercitation magna id labore.',
  imgUrl: 'https://via.placeholder.com/700x400',
  projectUrl: null
},
{
  title: 'H20Delirious',
  content: 'Fugiat nulla in duis occaecat minim exercitation magna id labore.',
  imgUrl: 'https://via.placeholder.com/700x400',
  projectUrl: null
},
{
  title: 'Cartoonz',
  content: 'Fugiat nulla in duis occaecat minim exercitation magna id labore.',
  imgUrl: 'https://via.placeholder.com/700x400',
  projectUrl: null
}
];

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
  if (users[user.username] && users[user.username] === user.password) {
    return res.status(200).json({
      msg: 'You have logged in successfully!',
      token: jwt.sign({
        user: user.username,
        secret: 'magic'
      }, 'SECRET')
    });
  } else {
    return res.status(400).json({
      msg: 'Invalid username or password'
    });
  };
});

router.get('/projects/list', (req, res, next) => {
  var decoded = jwt.decode(req.get(('X-AUTH-HEADER')));
  console.log(decoded, decoded.user);
  if (decoded.secret === 'magic') {
   return next();
  }
  return res.status(400).json({
    msg: 'Please Login!'
  });

}, (req, res) => {
  res.status(200).json(projects);
})

module.exports = router;
