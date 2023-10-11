var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:3000/testDB";

MongoClient.connect(url, function(err,db){
if(err){
    throw err;
}
console.log("test db is created");
db.close();



});