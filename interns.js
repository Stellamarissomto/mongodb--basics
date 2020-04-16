const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const url = "mongodb://localhost:27017/stellamaris_somto";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    
    const dbo = db.db("stellamaris_somto");

const doc = [ {movie: "The Banker", year: "2020", rating: 8}, 
              {movie: "Bad Boys", year: "2020", rating: 7}, 
              {movie: "The Hunt", year: "2020", rating: 7}, 
              {movie: "Bloodshot", year: "2020", rating: 7.5}, 
              {movie: "First Cow", year: "2020", rating: 6.5}
];


    dbo.collection("myMovies").insertMany(doc, function(err, res) {
            if (err) throw err;
            console.log(res);
            db.close();
          
        });

    });