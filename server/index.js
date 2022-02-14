const express = require("express");
const GUN = require("gun");
const app = express();
require("gun-mongo");
app.use(GUN.serve);
const port = process.env.PORT || 3030;
const server = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

GUN({
  file: "datadb",
  web: server,
  s3: {
    key: "AWS_KEY", // AWS Access Key
    secret: "AWS_TOKEN", // AWS Secret Token
    bucket: "s3://your_bucket", // The bucket you want to save into
  },
  // mongo: {
  //   host: "mongodb://project4351.9rzic.mongodb.net/test",
  //   port: '27017',
  //   username: "user_name",
  //   password: "password",
  //   database: "db_name",
  //   collection: "collection_name",
  //   query: "",
  // },
  // mongo:
  // "mongodb://your_link",
});
