const _ = require('lodash');
const my_arr = [1,2,3,4,5];

const map = _.map(my_arr, (num) => num * num );
console.log(map);