const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const url = "mongodb://localhost:27017/stellamaris_somto";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    
    const dbo = db.db("stellamaris_somto");
    dbo.createCollection("interns", function(err, res) {
        dbo.createCollection("customers", function(err, res) {
            if (err) throw err;
            console.log("interns Collection created");
            db.close();
          });
        });

    })