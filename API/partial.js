var express = require('express');
var app=  express();
const my_database = [
    {price:240000, city: "baltimore"},
    {price:300000, city: "austin"},
    {price:400000, city: "austin"},
    {price:1000000, city: "seattle"},
    {price:325000, city: "baltimore"},
    {price:550000, city: "seattle"},
    {price:250000, city: "boston"},
]

app.get('/v1/zillow/houses',function(req,res)
{
 
      const { city } = req.query; 

        if(city)
        {
            const data = my_database.filter(house => house.city === city )
            res.json(data)

        }
        else
        {
            res.json([]);
        }
     
});
// app.get('/v1/zillow/houses/',function(req,res)
// {
//     const my_database1 = []
//     res.send(my_database1);


// }
// );
console.log("Navigate to http://localhost:3000/");
app.listen(3000);