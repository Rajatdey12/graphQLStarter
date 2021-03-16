
const express = require('express');
const { graphqlHTTP } = require('express-graphql'); 
const { 
    GraphQLSchema, 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLList, 
    GraphQLNonNull, 
    GraphQLInt } = require('graphql');

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'respresnts a book written by an author',
    fields: () => ({
        id: {type: GraphQLNonNull(GraphQLInt)},
        name: {type: GraphQLNonNull(GraphQLString)},
        authorid: {type: GraphQLNonNull(GraphQLInt)}
    })
});

const RootQueryType = new GraphQLObjectType ({
    name: 'query',
    description: 'root query',
    fields: () => ({
        books: {
            type: new GraphQLList(BookType),
            description: 'List of Books',
            resolve: () => books
        }
    })
});

const schema = new GraphQLSchema({
    query: RootQueryType
});

const books = [
    { id: 1, name: 'harry potter and soccerer stone', authorid: 1},
    { id: 2, name: 'harry potter and Chamber of secrets', authorid: 2},
    { id: 3, name: 'harry potter and goblet of fire', authorid: 1}
]

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));