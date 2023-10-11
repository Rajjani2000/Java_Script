var request = require('request');
request('https://www.google.com',function(err,response,body){
    
    if(response.status == 200)
    {
        console.log(response)
    }
    
}
    
    
    );