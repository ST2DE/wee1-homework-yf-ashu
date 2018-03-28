const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.render('page/index');
})
app.get('/about_me', function (req, res) {
  var user = { name: req.query.name };
  res.render('page/index', {user: user});
})
app.get('/about', function (req, res) {
  res.render('page/about');
})
app.listen(3000, function () {
  console.log('start server on port 3000！');
})