const db = require("../config");

class Projects {
  fetchProjects(req, res) {
    const query = `
                SELECT 
                projID, projURL, projName, projDesc, projGit, projNet
                FROM Projects;
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
  fetchProjects(req, res) {
    const query = `
        SELECT 
        projID, projURL, projName, projDesc, projGit, projNet
        FROM Projects
        WHERE projID = ${req.params.projID}
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
  addProjects(req, res) {
    const query = `
                INSERT INTO Projects 
                SET ?
            `;
    db.query(query, [req.body], (err) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          msg: "Projects inserted successfully",
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

module.exports = { Projects };