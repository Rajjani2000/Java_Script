var express = require("express");
var app = express();

var a = [6,2,3,4,5]

app.get('/myarr',function(req,res){

        const my_sort = (req.query.my_sort)
        if(my_sort)
        {
            b =a.sort();
            res.send(b);
        }
        else
        {
            res.send(a)
        }
            

        


});



app.get('*',function(req,res){
    res.status(404).send("page not Found..")
});
console.log("navigate to http://localhost:3000/")
app.listen(3000);