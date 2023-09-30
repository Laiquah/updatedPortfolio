const db = require("../config");

class Softskills {
  fetchSoftskills(req, res) {
    const query = `
                SELECT 
                sofID, sofName, sofURL
                FROM Softskills;
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
  fetchSoftskills(req, res) {
    const query = `
        SELECT 
        sofID, sofName, sofURL
        FROM Softskills
        WHERE sofID = ${req.params.sofID}
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
  addSoftskills(req, res) {
    const query = `
                INSERT INTO Softskills 
                SET ?
            `;
    db.query(query, [req.body], (err) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          msg: "Softskills inserted successfully",
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

module.exports = { Softskills };