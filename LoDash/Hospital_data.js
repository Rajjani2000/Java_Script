const _ = require('lodash');


const patient_data = [

        {id :100, name : 'a', age : 30, disease : 'cancer'},
        {id :101, name : 'b', age : 31, disease : 'blood pressaure'},
        {id :102, name : 'c', age : 30, disease : 'Anxiety'},

];


const search = process.argv[2];
const filter = _.filter(patient_data,{'disease':search});
console.log(filter);

const sort = _.sortBy(patient_data,'id');
console.log(sort)




