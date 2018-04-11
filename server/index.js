// index.js
module.exports = function(app) {
  app.get('/', function(req, res, next) {
    let subpath = '/account/';
    if (req.path !== subpath) {
      res.redirect(subpath);
    } else {
      next();
    }
  });

  app.get('/account', function(req, res, next) {
    let subpath = '/account/';
    if (req.path !== subpath) {
      res.redirect(subpath);
    } else {
      next();
    }
  });
};
