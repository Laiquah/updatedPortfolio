const db = require("../config");

class Experience {
  fetchExperience(req, res) {
    const query = `
                SELECT 
                expID, expURL, expYear, expPlace, expRole, expDesc
                FROM Experience;
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
  fetchExperience(req, res) {
    const query = `
        SELECT 
        expID, expURL, expYear, expPlace, expRole, expDesc
        FROM Experience
        WHERE expID = ${req.params.expID}
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
  addExperience(req, res) {
    const query = `
                INSERT INTO Experience 
                SET ?
            `;
    db.query(query, [req.body], (err) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          msg: "Experience inserted successfully",
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

module.exports = { Experience };
