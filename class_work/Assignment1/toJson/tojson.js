// Algorithm
// step 1  :- implement the File System
// Step 2 :- read the File and perfomr Actions
// Step 3 :- Convert the Text file into the Single array
// Step 4 :-  check limne has at least 3 lines
// Step 5 :-  if no, print Message need at least 3 lines
// Step 6 :- if yes, proceed for the json object
// Step 7 :- create the Json object and assign the text values 
// Step 8 :- check othet line has no 0 value....If yes, then display  N/A mesage
// Step 9: :- Filter the Other data without the  '[]'
// Step 10 :- print the JSON object.. 
 

// import the File System 
const fs = require('fs');
const my_file = process.argv[2]

// read the file
fs.readFile(my_file,'utf-8',(err,data) =>
{
        // Convert the File data into the Array
        const my_line = data.split('\n');
        // console.log(line); 

        // check wheater file contains 3 lines or not

        if (my_line.length < 3) // If yes do not proceed Further...
        {
            console.log("need at least 3 lines")
        }


        else
        {
            // Create JSON OBJECT
            const obj = 
            {
                    // Assign the Values according to the fname, lname, location and other
                    fname : my_line[0],
                    lname : my_line[1],
                    location : my_line[2],
                    other : my_line.slice(3)



            };

            
            if (obj.other.length == 0) // If Other line value is 0 then represent o/P as "N/a"
            {
                obj.other = "N/A";

            }


            const new_other_data = obj.other.join(' ');// Remove '[]' from the o/P and present as String

            obj.other = new_other_data; // assign new value to the obj.other
            console.log(obj);// print json Objects
           
        

        }


});











