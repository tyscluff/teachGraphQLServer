import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import schema from './graphql/schema.js';
import { graphqlHTTP } from 'express-graphql';

const app = express();

mongoose.connect("");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log("Connection Successful!")
});

app.use(cors({
    origin: "*"
}));

app.get("/", (req, res) => {
    res.send("OK");
});

app.use("/graphql", graphqlHTTP((req, res) => ({
    schema,
    graphiql: true,
    context: req.body
})));

const PORT = "3001";

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
