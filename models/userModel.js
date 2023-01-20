import mongoose from "mongoose";

const Schema = mongoose.Schema 

const userModel = new Schema({
    name: { type: String, required: true },
    handle: { type: String, required: true }
});

const learn = mongoose.connection.useDb('learn');

const User = learn.model("User", userModel, "users");

export default User;