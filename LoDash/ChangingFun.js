const _= require('lodash');

const number = [1,2,3,4,5,0];

const myobj = _.chain(number)
//  .sum(number)
//  .map((number)=> number*number)
 .filter((number) => number%2 ==0)
 .value();



console.log(myobj);