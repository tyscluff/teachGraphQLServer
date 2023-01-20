import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } from "graphql";
import User from '../../models/userModel.js';
import userType from "./userType.js";

const tweetType = new GraphQLObjectType({
    name: "Tweet",
    fields: () => ({
        id: { type: GraphQLID },
        likes: { type: GraphQLInt },
        userId: { type: GraphQLString },
        content: { type: GraphQLString },
        user: { 
            type: userType,
            async resolve (parent, args) {
                const user = await User.findById(parent.userId);
                return user;
            }
        }
    })
});

export default tweetType;