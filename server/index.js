const express = require('express');
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

const app = express();
// create server
app.use(bodyParser());
// User bodyParser to get data as Objects
app.get('/api/fail', (req, res) => res.status(403).json({ msg: 'You are not allowed to access this' }));
// Super fake fail req
app.get('/api/product', function( req, res, next) {
  var token = req.get('X-AUTH-HEADER');
  // get Token from header
  var user = jwt.decode(token);
  // decode the token
  if ( user && user.user) {
    return next();
  }
  return res.status(403).json({msg: 'Please Loging to access this information'});
}, require('./projects'));

app.use('/api/user', require('./user.js'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
