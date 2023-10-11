const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017'; // MongoDB URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  const db = client.db('raj_jani'); // Replace 'your_database_name' with your actual database name

  db.createCollection('customers', (err, collection) => {
    if (err) {
      console.error('Error creating collection:', err);
    } else {
      console.log('Collection "customers" created successfully.');
    }

    client.close(); // Close the MongoDB connection
  });
});
