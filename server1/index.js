const express = require("express");
const GUN = require("gun");
const app = express();
app.use(GUN.serve);
const port = 3031;
const server = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
// standard server for development
GUN({ web: server });
