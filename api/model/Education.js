const db = require("../config");

class Education {
  fetchEducation(req, res) {
    const query = `
                SELECT 
                eduID, eduURL, eduPlace, eduQual, eduYear
                FROM Education;
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
  fetchEducation(req, res) {
    const query = `
        SELECT 
        eduID, eduURL, eduPlace, eduQual, eduYear
        FROM Education
        WHERE eduID = ${req.params.eduID}
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
  addEducation(req, res) {
    const query = `
                INSERT INTO Education 
                SET ?
            `;
    db.query(query, [req.body], (err) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          msg: "education inserted successfully",
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

module.exports = { Education };
