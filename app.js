const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const url = "mongodb://localhost:27017/stellamaris_somto";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created by stellamariss_somto");
    db.close();
  });

