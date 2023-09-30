const db = require("../config");

class Hardskills {
  fetchHardskills(req, res) {
    const query = `
                SELECT 
                harID, harName, harURL, harDesc
                FROM Hardskills;
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
  fetchHardskills(req, res) {
    const query = `
        SELECT 
        harID, harName, harURL, harDesc
        FROM Hardskills
        WHERE harID = ${req.params.harID}
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
  addHardskills(req, res) {
    const query = `
                INSERT INTO Hardskills 
                SET ?
            `;
    db.query(query, [req.body], (err) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          msg: "Hardskills inserted successfully",
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

module.exports = { Hardskills };
