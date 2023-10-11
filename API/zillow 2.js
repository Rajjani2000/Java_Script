var express = require("express"); //import express JS Framework
var app = express();// define  application

//END POINT 1(Zestimates.....) :-
app.get("/v1/zillow/zestimate", function (req, res) {
  //Fetch the data from url 
  const sqft = parseInt(req.query.sqft);
  const bed = parseInt(req.query.bed);
  const bath = parseInt(req.query.bath);
  const zestimate = sqft * bed * bath * 10;

  //check it is in integer or not
  if (isNaN(sqft) || isNaN(bed) || isNaN(bath)) {
    res.status(400).json({ error: "Please Enter only number" });
  } else {
    //return in Zestimate
    res.status(200).json({ zestimate });
  }
});

//END POINT 2(by city ) :-
//Define database
const my_house_database = [
  { price: 240000, city: "baltimore" },
  { price: 300000, city: "austin" },
  { price: 400000, city: "austin" },
  { price: 1000000, city: "seattle" },
  { price: 325000, city: "baltimore" },
  { price: 550000, city: "seattle" },
  { price: 250000, city: "boston" },
];

app.get("/v1/zillow/houses", function (req, res) {
  //take city name from the url
  const { city } = req.query;
  
  if (city) {
    //filter the house data according to the name of the city
    const filter_houses = my_house_database.filter((k) => k.city === city);
    res.status(200).json(filter_houses);
  } else {
    res.status(200).json([]);
  }
});

//END POINT 3(By Pricess):-
app.get("/v1/zillow/prices", function (req, res) {
  //fetch usd  value from the url..
  const usd = parseInt(req.query.usd);
  if (usd) {
    //filter the house data based on the usd price..
    const filter_price = my_house_database.filter((k) => k.price <= usd);
    res.status(200).json(filter_price);
  } else {
    res.status(200).send("usd parameter is required ");
  }
});

//BASE URL ENDPOINT(Default End Point) :-
app.get("*", function (req, response) {
  response.status(404).send("Page Not Found..");
});

console.log("Navigate to http://localhost:3000/");
app.listen(3000);
