function errorHandling(err, req, res, next) {
    if (err) {
      let status = err.status || 404;
      res.json({
        status,
        msg: "An error has occured",
      });
    }
    next();
  }
  
  module.exports = { 
    errorHandling 
};