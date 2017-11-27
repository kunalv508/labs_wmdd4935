let mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    if(err)
        return console.log(err);
    let Parrots = db.collection('parrots');
    Parrots.find({
        age: { 
            $gt: +process.argv[2] 
        }
    }).toArray(function(err, data){
        if(err) 
            return console.log(err);
        console.log(data);
        db.close();
    });
})