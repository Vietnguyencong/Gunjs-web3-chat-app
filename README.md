# Overview

Decentralized chat application. All data is stored in peers and your local browsers.

## Installation


```bash
cd folder_name
npm install
```

## Usage
Frontend: connect your peers in frontend
```javascript
const gun = Gun({
  peers: ["http://localhost:5000/gun"],
  peers: ["http://localhost:3030/gun"],
  peers: ["https://decentrialized.herokuapp.com/gun"], // example 
});

```
Backend: Create your peers and indicate where you could store them (S3 bucket, MongoDB, your local storage)
```javascript
//AWS bucket 
GUN({
  file: "datadb",
  web: server,
  s3: {
    key: "AWS_KEY", // AWS Access Key
    secret: "AWS_TOKEN", // AWS Secret Token
    bucket: "s3://your_bucket", // The bucket you want to save into
  }
//MongoDB
  GUN(
   mongo: {
   host: "mongodb://project4351.9rzic.mongodb.net/test",
   port: '27017',
   username: "user_name",
   password: "password",
   database: "db_name",
   collection: "collection_name",
   query: "",
  },

```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
