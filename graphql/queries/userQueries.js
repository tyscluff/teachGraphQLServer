import { GraphQLID } from "graphql";
import User from "../../models/userModel.js";
import userType from "../types/userType.js";

export const user = {
    type: userType,
    args: { id: { type: GraphQLID }},
    async resolve (parent, args) {
        const user = await User.findById(args.id);
        return user;
    }
};