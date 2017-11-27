let mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    if(err)
        return console.log(err);
})