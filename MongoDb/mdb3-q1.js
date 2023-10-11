

db.createCollection('customers', function (err, res)  {
    if (err) {
     throw err;
    }
  
    console.log('Customers collection created');
    client.close();
  });
  