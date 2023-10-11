// Algorithm
// Step 1 :- initiate process.argv array for command line argument and define two arrays - 1 for insert the value , and 2 for Even value 
// Step 2 :- starts loop for inserting eleemrnt in the Array
// Step 3 :- check the condition if inserted value is even or not
// Step 4 :- if it is even, then append value into the even array
// Stepn 5 :- then print even values and the Length of the Array
// Step 6 :- End



const t = process.argv;
a=[];
even = [];




t.forEach(
    v => {
        a.push(v);
        if (v%2 == 0)
        {
            even.push(v);
        }



    
});
console.log("The Array contains following Even numbers "+even);
const d = even.length;
console.log("The length of array is "+d) 























