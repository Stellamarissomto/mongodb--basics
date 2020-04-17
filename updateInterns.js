const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const url = "mongodb://localhost:27017/stellamaris_somto";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    
    const dbo = db.db("stellamaris_somto");

    const old = {movie: "The Banker", year: "2020", rating: 8};
    const mnew = { $set:{movie: "Money Heist", year: "2020", rating: 9} };


    dbo.collection("myMovies").updateMany( old, mnew, function(err, res) {
            if (err) throw err;
            console.log(res);
            db.close();
          
        });

    });