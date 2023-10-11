const _= require('lodash');

function search(query)
{
console.log(query);
}

const my = _.debounce(search,500);

my('banana');
















// const _ = require('lodash');


// function search(query) {
//   console.log("Searching for:",query);
// }

// // Using Lodash to debounce the search function
// const debouncedSearch = _.debounce(search, 500); // Debounce with a 500ms delay

// // Simulate user typing
// debouncedSearch('apple');
// debouncedSearch('banana');
// debouncedSearch('cherry');

// // Only the last call will trigger the search function after a 500ms pause
