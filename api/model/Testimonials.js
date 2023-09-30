const db = require("../config");

class Testimonials {
  fetchTestimonials(req, res) {
    const query = `
                SELECT 
                testID, testURL, testName, testRole, testWords
                FROM Testimonials;
            `;
    db.query(query, (err, results) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          results,
        });
      } else {
        res.json({
          status: res.statusCode,
          msg: "An error has occured",
          err,
        });
      }
    });
  }
  fetchTestimonials(req, res) {
    const query = `
        SELECT 
        testID, testURL, testName, testRole, testWords
        FROM Testimonials
        WHERE testID = ${req.params.testID}
            `;
    db.query(query, (err, result) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          result,
        });
      } else {
        res.json({
          status: res.statusCode,
          msg: "An error has occured",
        });
      }
    });
  }
  addTestimonials(req, res) {
    const query = `
                INSERT INTO Testimonials 
                SET ?
            `;
    db.query(query, [req.body], (err) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          msg: "Testimonials inserted successfully",
        });
      } else {
        res.json({
          status: res.statusCode,
          msg: "An error has occured",
          err,
        });
      }
    });
  }
}

module.exports = { Testimonials };