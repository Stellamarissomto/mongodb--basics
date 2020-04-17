const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const url = "mongodb://localhost:27017/stellamaris_somto";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    
    var dbo = db.db("stellamaris_somto");

const doc = [ {movie: "The Banker", year: "2020", rating: 8}, 
              {movie: "Bad Boys", year: "2020", rating: 7}, 
              {movie: "The Hunt", year: "2020", rating: 7}, 
              {movie: "Bloodshot", year: "2020", rating: 7.5}, 
              {movie: "First Cow", year: "2020", rating: 6.5}
];


// returns the first document in the collection

    dbo.collection("myMovies").findOne({}, (function(err, res) {
            if (err) throw err;
            console.log(res);

           
          
        }));

        // returns all movies with rating equal to 7

        const query = { rating : 7};

        dbo.collection("myMovies").find(query).toArray(function(err, res) {
            if (err) throw err;
            console.log(res);



        db.close();

    });

    // only the movie title

    dbo.collection("myMovies").find({}, { projection: { movie: 1 } }).toArray(function(err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
      });


      // all my collection 
      dbo.collection("myMovies").find({}).toArray(function(err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
      


      });




      });
