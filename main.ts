import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/query.ts";
import { Mutation } from "./resolvers/mutation.ts";
import { Character } from "./resolvers/character.ts";
import { Location } from "./resolvers/location.ts";
import { Episode } from "./resolvers/episode.ts";
import { typeDefs } from "./gql/schema.ts";
import montoose from "mongoose";

const API_KEY = Deno.env.get("API_KEY");
if (!API_KEY) {
  throw new Error("Please provide a MongoDB connection string");
}

// Connect to MongoDB
await montoose.connect(API_KEY);

console.info("🚀 Connected to MongoDB");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Character,
    Location,
    Episode,
  }
});

const { url } = await startStandaloneServer(server);
console.info(`🚀 Server ready at ${url}`);
