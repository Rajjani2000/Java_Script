const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const { buildSchema } = require('graphql');


//Defining Data
const ufcFightersData = [
  {
    name: "Dustin Jacoby",
    nickname: "N/A",
    wins: 19,
    losses: 6,
    height: 1.93,
    weightClass: "Light heavyweights ",
    fightingLocation: "Las Vegas",
  },
  {
    name: "Yana Santos",
    nickname: "Foxy",
    wins: 14,
    losses: 8,
    height: 1.68,
    weightClass: "Women's featherweights",
    fightingLocation: "Las Vegas",
  },
  {
    name: "Rose Namajunas",
    nickname: "Thug",
    wins: 11,
    losses: 6,
    height: 1.65,
    weightClass: "Women's flyweights",
    fightingLocation: "Paris, France",
  },
  {
    name: "Jéssica Andrade",
    nickname: "Bate Estaca",
    wins: 16,
    losses: 10,
    height: 1.57,
    weightClass: "Women's strawweights",
    fightingLocation: "New York City",
  },
  {
    name: "Macy Chiasson",
    nickname: "N/A",
    wins: 8,
    losses: 3,
    height: 1.75,
    weightClass: "Women's bantamweights",
    fightingLocation: "Las Vegas",
  },
  {
    name: "Stephen Thompson",
    nickname: "Wonderboy",
    wins: 17,
    losses: 6,
    height: 1.83,
    weightClass: "Welterweights",
    fightingLocation: "Las Vegas",
  },

  {
    name: "Andrei Arlovski",
    nickname: "The Pit Bull",
    wins: 34,
    losses: 22,
    height: 1.91,
    weightClass: "Heavyweights",
    fightingLocation: "Las Vegas",
  },
  {
    name: "Kelvin Gastelum",
    nickname: "N/A",
    wins: 18,
    losses: 8,
    height: 1.75,
    weightClass: "Middleweights",
    fightingLocation: "Austin",
  },

  {
    name: "Jim Miller",
    nickname: "N/A",
    wins: 36,
    losses: 17,
    height: 1.73,
    weightClass: "Lightweights",
    fightingLocation: "Las Vegas",
  },
  {
    name: "Tim Elliott",
    nickname: "N/A",
    wins: 18,
    losses: 14,
    height: 1.7,
    weightClass: "Flyweights",
    fightingLocation: "Abu Dhabi,UAE",
  },
  {
    name: "Leon Edwards",
    nickname: "N/A",
    wins: 21,
    losses: 3,
    height: 1.88,
    weightClass: "Middleweights",
    fightingLocation: "Las Vegas",
  },

  {
    name: "Islam Makhachev",
    nickname: "N/A",
    wins: 25,
    losses: 1,
    height: 1.73,
    weightClass: "Super Lightweight",
    fightingLocation: "Abu Dhabi",
  },

  {
    name: "Mizuki Inoue",
    nickname: "N/A",
    wins: 15,
    losses: 6,
    height: 1.63,
    weightClass: "Women's strawweights",
    fightingLocation: "Las Vegas",
  },
  {
    name: "Diana Belbiţă",
    nickname: "The Warrior Princess",
    wins: 15,
    losses: 8,
    height: 1.7,
    weightClass: "Women's strawweights",
    fightingLocation: "Las Vegas",
  },
  {
    name: "Gillian Robertson",
    nickname: "The Savage",
    wins: 12,
    losses: 8,
    height: 1.57,
    weightClass: "Women's strawweights",
    fightingLocation: "Toronto",
  },
  {
    name: "Kang Kyung-ho",
    nickname: "Mr. Perfect",
    wins: 19,
    losses: 10,
    height: 1.75,
    weightClass: "Bantamweights",
    fightingLocation: "Las Vegas",
  },
  {
    name: "Taylor Lapilus",
    nickname: "Double Impact",
    wins: 19,
    losses: 3,
    height: 1.68,
    weightClass: "Bantamweights",
    fightingLocation: "Las Vegas",
  },
  {
    name: "Merab Dvalishvili",
    nickname: "The Machine",
    wins: 16,
    losses: 4,
    height: 1.68,
    weightClass: "Bantamweights",
    fightingLocation: "Las Vegas",
  },
  {
    name: "Paul Craig",
    nickname: "BearJew",
    wins: 17,
    losses: 7,
    height: 1.93,
    weightClass: "Middleweights",
    fightingLocation: "Las Vegas",
  },
  {
    name: "Melissa Dixon",
    nickname: "No Mess",
    wins: 6,
    losses: 0,
    height: 1.7,
    weightClass: "Women's bantamweights",
    fightingLocation: "Las Vegas",
  },
];

//GraphQl schema
const schema = buildSchema(`
type Query
{
 getFighterByName(name: String!): Fighter
 getFighterByWeightClass(weightClass: String!): [Fighter]


}
type Fighter {

    name: String
    nickname: String
    wins: Int
    losses: Int
    height: Float
    weightClass: String
    fightingLocation: String
   
}`);

// GraphQl resolver
const root = {
    getFighterByName: ({ name })=> ufcFightersData.find(fighter => fighter.name === name),
    getFighterByWeightClass: ({weightClass}) => ufcFightersData.filter(fighter => fighter.weightClass === weightClass),

};

const app = express();

app.use('/testgraphql',graphqlHTTP(
    {
        schema: schema,
        rootValue: root,
        graphiql: true,
    }
));

app.listen(3000, () =>
  console.log(
    "Express GraphQL Server Now Running On localhost:3000/testgraphql"
  )
);