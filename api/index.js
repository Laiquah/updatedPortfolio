const { express, routes } = require("./controller");
require('dotenv').config()
const app = express();
const path = require("path");
const port = +process.env.PORT || 3000;
const cors = require("cors");
const { errorHandling } = require("./middleware/ErrorHandling");
const cookieParser = require("cookie-parser");

app.use(
  express.static("./static"),
  express.urlencoded({ extended: false }),
  cookieParser(),
  cors(),
  routes
);

app.use(errorHandling);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
});

routes.get("^/$|/clayexpressions", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./static/html/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});