var express = require('express');
var app =express();
const my_database = [
    {price:240000, city: "baltimore"},
    {price:300000, city: "austin"},
    {price:400000, city: "austin"},
    {price:1000000, city: "seattle"},
    {price:325000, city: "baltimore"},
    {price:550000, city: "seattle"},
    {price:250000, city: "boston"},
]

app.get('/v1/zillow/prices',function(req,response){
    const usd = parseInt(req.query.usd);
    if(usd)
    {
        const filter_database = my_database.filter( m => m.price < usd)
        response.status(200).json(filter_database);

    }
    else
    {
        response.status(200).json([])
    }









});
app.get('*',function(req,response)
{

response.status(404).send("Page not found")

});
console.log("http://localhost:3000/");
app.listen(3000);






