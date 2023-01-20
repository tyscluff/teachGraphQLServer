import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from 'graphql';
import Tweet from '../../models/tweetModel.js';
import tweetType from './tweetType.js';

const userType = new GraphQLObjectType({
    name: "user",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        handle: { type: GraphQLString },
        tweets: {
            type: new GraphQLList(tweetType),
            async resolve (parent, args) {
                const tweets = await Tweet.find({ userId: parent.id });
                return tweets;
            }
        }
    })
});

export default userType;