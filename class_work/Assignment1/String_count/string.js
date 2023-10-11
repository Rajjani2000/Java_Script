
// Algorithm
// step 1 : import the text file  and defind array that we need to match the data
// srtep 2 : read the Text file and implement changhess
// step 3 : fetch the data from the text file and convert into the array and lower case too
// step 4 : run 2 loops one for text data and second for predefine array data
// step5 : emforce condition if elements gets match then inititate the counter
// step 6: print the counter value 

 


// import file system
const fs = require('fs');
const my_file = process.argv[2];


// predefine the array
a= ["towson","cis","web","development"];




// readfile
fs.readFile(my_file, 'utf8', (err,data) =>
{

    c = 0; // Set the Counter Value
    l = data.toLocaleLowerCase(); // Convert the Data into the LowerCase
    d= l.split(' ');// Convert the Data into the Array
    
    // Transfer The array into the loop to check elements match or not
    for(i=0;i<=d.length-1; i++)
    {
        for(j=0;j<=d.length-1;j++)
        {
            if(d[i] == a[j])// if match then inititate the Counter
            {
                
                c = c + 1;
                
               
            }
               
        }
        
    }

console.log("The Total number of occurence is = ",c);

    
    
    
    
});
