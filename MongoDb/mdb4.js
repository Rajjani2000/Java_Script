db.createCollection('customers', function (err, res)  {
    if (err) {
     throw err;
    }
  
    console.log('Customers collection created');
    client.close();
  });
  

var inputCustomers = [
  { name: "Nate", address: "123 Main Street" },
  { name: "James", address: "1834 South Charles" },
  { name: "Tupac", address: "222 Thugs Mansion Drive" },
  { name: "Fred", address: "5 Cavan Green Circle" },
  { name: "Cassie", address: "56 Riverside Avenue" }
];

db.customers.insertMany(inputCustomers);



db.customers.updateOne(
    { name: "Cassie" },
    { $set: { address: "1244 William Street" } } 
  );


  
  db.customers.find().sort({ name: 1 });

  db.customers.drop();