import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/query.ts";
import { Mutation } from "./resolvers/mutation.ts";
import { Character } from "./resolvers/character.ts";
import { Location } from "./resolvers/location.ts";
import { Episode } from "./resolvers/episode.ts";
import { typeDefs } from "./gql/schema.ts";
import montoose from "mongoose";



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
