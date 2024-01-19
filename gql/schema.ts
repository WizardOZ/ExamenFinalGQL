// The GraphQL schema
export const typeDefs = `#graphql
  type Object {
    name : String!
  }

  type Query {
    objects: [Object!]!
    object(id: ID!): Object!
  }
  type Mutation {
    addObject(name: String!, breed: String!, owner:ID!): Object!
    deleteObject(id: ID!): Object!
    updateObject(id: ID!, name: String, breed: String, owner:ID): Object!
  }
`;
