// The GraphQL schema
export const typeDefs = `#graphql
  type Object {
    field : String!
  }

  type Query {
    object : Object!
  }

  type Mutation{
    addObject(name : String!): Object!
    deleteObject(id : ID!) : Object!
    updateObject(id : ID!, name : String!) : Object!
  }
`;
