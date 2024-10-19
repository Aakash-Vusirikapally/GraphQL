const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const MONGODB = "mongodb+srv://Aakash:<password>@cluster0.lofyf.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0";
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log("MongoDB connection is successful");
        return server.listen({ port: 3000 });
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB or starting server:", err);
    });
