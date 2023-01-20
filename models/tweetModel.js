import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tweetModel = new Schema({
    content: { type: String, required: true },
    likes: { type: Number },
    userId: { type: String }
});

const learn = mongoose.connection.useDb('learn');

const Tweet = learn.model('Tweet', tweetModel, 'tweets');

export default Tweet;