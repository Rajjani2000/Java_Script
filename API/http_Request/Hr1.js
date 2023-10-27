var request = require('request');

request("https://www.york.ac.uk/teaching/cws/wws/webpage1.html",function(err,response,body)
{

    console.log(body);
    console.log(response)

});