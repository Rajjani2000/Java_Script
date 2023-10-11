const _ = require('lodash');

const my_obj = [
{name:'raj', age:30 },
{name:'jani', age:25 },
{name:'krunal', age:24 },



];
 
const my_p = _.groupBy(my_obj,'name');

console.log(my_p);