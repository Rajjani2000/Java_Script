
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();

const my_data =  [
{
    name: 'raj',
    age: 30,
    nickname: 'jani'

}
];

const schema =  buildSchema(`

type Person
{
    name: String,
    age: Int,
    nickname: String,

}
type Query
{
    getPersonByName(name: String!):Person
    getPersonByNickname(nickname: String!): [Person]

}
`
);

const logic = {
  getPersonByName:({name})=> my_data.find(person => person.name === name),
  getPersonByNickname: ({nickname}) => my_data.filter(person => person.nickname === nickname)

};



app.use('/test',graphqlHTTP(
    {
        schema: schema,
        rootValue: logic,
        graphiql: true
    }
));

app.listen(3000,()=>
{
    console.log("server is working")
})