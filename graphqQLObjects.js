const { 
    GraphQLSchema, 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLList, 
    GraphQLNonNull, 
    GraphQLInt } = require('graphql');

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'represents a book written by an author',
    fields: () => ({
        id: {type: GraphQLNonNull(GraphQLInt)},
        name: {type: GraphQLNonNull(GraphQLString)},
        authorid: {type: GraphQLNonNull(GraphQLInt)}
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'All the authors',
    fields: () => ({
        Aid: {type: GraphQLNonNull(GraphQLInt)},
        AuthName: {type: GraphQLNonNull(GraphQLString)}
    })
});

module.exports.BookType = BookType;
module.exports.AuthorType = AuthorType;