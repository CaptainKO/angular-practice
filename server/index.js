const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
var jwt = require('jsonwebtoken');

const app = express();
// create server
app.use(bodyParser());
app.use(cors());
// User bodyParser to get data as Objects
app.use(express.static(__dirname +'/../dist/beta'));

app.get('/api/fail', (req, res) => res.status(403).json({
  msg: 'You are not allowed to access this'
}));
// Super fake fail req
app.use('/api/product', function (req, res, next) {
  var token = req.get('X-AUTH-HEADER');
  // get Token from header
  var user = jwt.decode(token);
  // decode the token
  if (user && user.user) {
    return next();
  }
  return res.status(403).json({
    msg: 'Please Loging to access this information'
  });
}, require('./projects'));

app.use('/api/user', require('./user.js'));

app.get('/*', (req, res)=> {
  console.log(__dirname);
  res.status(200).sendFile(path.join(__dirname +'/../dist/beta/index.html'));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
