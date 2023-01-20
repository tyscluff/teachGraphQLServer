import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { user } from '../graphql/queries/userQueries.js';

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user
    }
});    

// const Mutation = new GraphQLObjectType({
//     name: "Mutation",
//     fields: {

//     }
// });

export default new GraphQLSchema({
    query: RootQuery,
    // mutation: Mutation
});