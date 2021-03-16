
const express = require('express');
const { graphqlHTTP } = require('express-graphql'); 
const { 
    GraphQLSchema, 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLList, 
    GraphQLNonNull, 
    GraphQLInt } = require('graphql');

const bookObject = require('./graphqQLObjects').BookType;
const authorObject = require('./graphqQLObjects').AuthorType;

const authorData = require('./dummyEntries').authorList;
const bookdata = require('./dummyEntries').booksList;


const RootQueryType = new GraphQLObjectType ({
    name: 'query',
    description: 'root query',
    fields: () => ({
        book : {
            type: new GraphQLList(bookObject),
            description: 'List of Books',
            resolve: () => bookdata
        },
        author : {
            type: new GraphQLList(authorObject),
            description: 'List of Authors',
            resolve: () => authorData
        }
    })
});

const schema = new GraphQLSchema({
    query: RootQueryType
});

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));